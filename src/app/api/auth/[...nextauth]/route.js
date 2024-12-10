/* eslint-disable no-param-reassign */
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/Users";
import bcrypt from "bcryptjs";
import { CustomError } from "@/utils/CustomError";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // eslint-disable-next-line consistent-return
      async authorize(credentials) {
        try {
          const { email, password } = credentials;

          if (!email || !password) {
            throw new CustomError("Email and password are required.", 400);
          }
          const user = await User.findOne({ where: { email } });
          if (!user) {
            throw new CustomError("User not found.", 404);
          }

          const isValidPassword = await bcrypt.compare(password, user.password);

          if (!isValidPassword) {
            throw new CustomError("Invalid password.", 401);
          }

          return {
            error: false,
            user: { id: user.id, email: user.email },
            message: "Login successful.",
          };
        } catch (error) {
          if (error instanceof CustomError) {
            throw new CustomError(
              JSON.stringify({ status: error.status, message: error.message }),
            );
          }
          throw new CustomError(
            JSON.stringify({ status: 500, message: "Internal Server Error" }),
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
    signOut: "/auth/signout", // Custom sign-out page
    error: "/auth/error", // Custom error page
    newAccount: "/auth/welcome", // Redirect after account creation
  },

  callbacks: {
    // Redirect function after sign-in, account creation, etc.
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        return baseUrl;
      }
      return url;
    },

    // Store user info in the session
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.token = token.token;
      }
      return session;
    },

    // Handling JWT token, adding user data to the token
    async jwt({ token, account, user }) {
      if (account && user) {
        token.id = user.id;
        token.email = user.email;

        // Handle Google sign-in for first-time users
        if (account.provider === "google" && user) {
          const existingUser = await User.findOne({
            where: { email: user.email },
          });

          if (!existingUser) {
            // User does not exist, create a new user in the database
            const newUser = await User.create({
              name: user.name,
              email: user.email,
              // image: user.image || "", // Optionally store user's image
            });

            // Store new user ID in the token for future sessions
            token.id = newUser.id;
          } else {
            token.id = existingUser.id;
          }
        }
      }
      return token;
    },
  },
  debug: process.env.NODE_ENV === "development",
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
