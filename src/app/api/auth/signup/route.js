// /app/api/auth/custom-signup/route.js
import { sequelize } from "@/db_connection";
import User from "@/models/Users";
import { SignupSchema } from "@/validation/signupSchema";
import bcrypt from "bcryptjs";
import { isValidPhoneNumber } from "libphonenumber-js";
import { getProviders } from "next-auth/react";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      fname,
      lname,
      email,
      password,
      CEmail,
      CPassword,
      day,
      month,
      year,
      gender,
      phone,
    } = await req.json();

    // Check if email matches and passwords match
    if (email !== CEmail) {
      throw new Error("Emails do not match");
    }
    if (password !== CPassword) {
      throw new Error("Passwords do not match");
    }

    // Check if the phone number is valid
    if (!isValidPhoneNumber(phone, "IL")) {
      throw new Error("Invalid phone number");
    }

    const validate = await SignupSchema.validate(
      {
        fname,
        lname,
        email,
        password,
        CEmail,
        CPassword,
        day,
        month,
        year,
        gender,
        phone,
      },
      { abortEarly: false },
    );

    if (validate.error) {
      throw new Error(validate.error.details[0].message);
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const checkIfExist = await User.findOne({ where: { email } });
    if (checkIfExist) {
      throw new Error("User already exists");
    }

    const newUser = {
      fname,
      lname,
      email,
      password: hashedPassword,
      day,
      month,
      year,
      gender,
      phone, // Store phone number as-is, or format it if necessary
    };

    await sequelize.sync({ force: false });
    await sequelize.authenticate();

    const user = await User.create(newUser); // Uncomment when User model is defined

    return new Response(
      JSON.stringify({ message: "User created successfully", user }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function GET() {
  const providers = await getProviders();

  return NextResponse.json(providers, { status: 200 });
}
