"use client";

import { useEffect, useState } from "react";
import { fetcher } from "@/utils/axios";
import { signIn } from "next-auth/react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { theme } from "@/themes/theme";
import { FlexRowBox } from "@/styles/components.styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "react-phone-input-2/lib/style.css";
import { SigninSchema } from "@/validation/signInSchema";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [Serror, setError] = useState({
    email: "",
    password: "",
  }); // For error handling
  const router = useRouter();

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = SigninSchema.validate(form, { abortEarly: false });
    if (error) {
      const newErrors = {
        email: "",
        password: "",
      };

      error.details.forEach((detail) => {
        if (detail.message.includes("Email")) {
          newErrors.email = detail.message.replace('"Email"', "");
        }
        if (detail.message.includes("Password")) {
          newErrors.password = detail.message.replace('"Password"', "");
        }
      });
      setError(newErrors);

      return;
    }
    try {
      const callbackUrl = "/dashboard";
      // const response = await fetcher.post("/auth/sign", form);

      // if (response.message === "User created successfully") {
      const result = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (result?.error) {
        const parsedError = JSON.parse(result?.error);

        if (parsedError.message === "User not found.") {
          setError({ email: "User not found" });
        }
        if (parsedError.message === "Invalid password.") {
          setError({ password: "Invalid password" });
        } else {
          toast.error(parsedError.message);
        }
      } else {
        router.push("/");
      }

      // const data = await result.json();
      // if (result.ok) {
      //   router.push(callbackUrl);
      // } else {
      //   setError(data.error || "Something went wrong");
      // }
    } catch (err) {

      setError(err?.message || "Error signing In");
    }
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });

    // Clear the specific error for the field being updated
    setError({ ...Serror, [field]: "" });
  };

  return (
    isClient && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: "2em 0",
          width: "100%",
        }}
      >
        <FlexRowBox
          sx={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row-reverse",
            width: "100%",
            gap: 15,
          }}
        >
          <Image
            src="/auth/Login-amico.svg"
            alt="404 Error Illustration"
            width={400}
            height={400}
          />
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 20,
              width: "30%",
              // height: "100%",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "2.5rem",
                color: theme.palette.primary.main,
                p: 2,
              }}
            >
              Sign In
            </Typography>
            <TextField
              error={Serror.email}
              type="email"
              helperText={Serror.email || ""}
              placeholder="Email"
              value={form.email}
              onChange={handleChange("email")}
              required
              sx={{
                width: "100%",
                p: 0,
                "& .MuiFormhelperText-root": {},
              }}
            />

            <TextField
              error={Serror.password}
              helperText={Serror.password || ""}
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange("password")}
              required
              sx={{
                width: "100%",
                p: 0,
                "& .MuiFormhelperText-root": {},
              }}
            />

            <Button
              type="submit"
              sx={{
                width: "100%",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.wBkg,
                fontWeight: "bolder",
                mt: 1,
                "&:hover": {
                  backgroundColor: theme.palette.primary.orange,
                },
              }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>

            <Button
              // type="submit"
              sx={{
                width: "100%",
                // backgroundColor: theme.palette.primary.main,
                // color: theme.palette.primary.wBkg,
                border: `1px solid ${theme.palette.primary.border2}`,
                fontWeight: "bolder",
                gap: 2,
                // mt: 1,
                "&:hover": {
                  backgroundColor: theme.palette.primary.wBkg,
                },
              }}
              onClick={() => signIn("google")}
            >
              <Image
                src="/auth/LoginGoogle.svg"
                alt="Google Icon"
                width={30}
                height={30}
              />
              Signin with google
            </Button>
            <ToastContainer />
          </form>
        </FlexRowBox>
      </Box>
    )
  );
}
