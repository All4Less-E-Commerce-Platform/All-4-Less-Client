"use client";

import { useEffect, useState } from "react";
import { fetcher } from "@/utils/axios";
import { signIn } from "next-auth/react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Box,
  Button,
  TextField,
  Typography,
  // FormControl  ,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { theme } from "@/themes/theme";
import { FlexRowBox } from "@/styles/components.styled";
// import Image from 'next/image';
import { SignupSchema } from "@/validation/signupSchema";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Signup() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    CEmail: "",
    CPassword: "",
    day: "", // For day
    month: "", // For month
    year: "", // For year,
    gender: "",
    phone: "",
  });
  const [Serror, setError] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    CEmail: "",
    CPassword: "",
    day: "", // For day
    month: "", // For month
    year: "",
    phone: false,
    gender: "",
  }); // For error handling
  const router = useRouter();

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = SignupSchema.validate(form, { abortEarly: false });
    if (error) {
      // Initialize a fresh copy of error state
      const newErrors = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        CEmail: "",
        CPassword: "",
        day: "",
        month: "",
        year: "",
        gender: "",
        phone: false,
      };

      error.details.forEach((detail) => {
        if (detail.message.includes("First")) {
          newErrors.fname = detail.message.replace('"First Name"', "");
        }
        if (detail.message.includes("Last")) {
          newErrors.lname = detail.message.replace('"Last Name"', "");
        }
        if (detail.message.includes("Confirm Email")) {
          newErrors.CEmail = detail.message.replace('"Confirm Email"', "");
        } else if (detail.message.includes("Email")) {
          newErrors.email = detail.message.replace('"Email"', "");
        }
        if (detail.message.includes("Confirm Password")) {
          newErrors.CPassword = detail.message.replace(
            '"Confirm Password"',
            "",
          );
        } else if (detail.message.includes("Password")) {
          newErrors.password = detail.message.replace('"Password"', "");
        }
        if (detail.message.includes("Day")) {
          newErrors.day = detail.message.replace('"Day"', "");
        }
        if (detail.message.includes("Month")) {
          newErrors.month = detail.message.replace('"Month"', "");
        }
        if (detail.message.includes("Year")) {
          newErrors.year = detail.message.replace('"Year"', "");
        }

        if (detail.message.includes("Gender")) {
          newErrors.gender = detail.message.replace('"Gender"', "");
        }

        if (detail.message.includes("Phone")) {
          newErrors.phone = detail.message.replace('"Phone"', "");
        }
        const formattedPhone = form.phone.startsWith("+")
          ? form.phone
          : `+${form.phone}`;

        if (!isValidPhoneNumber(formattedPhone)) {
          newErrors.phone = "Invalid phone number format";
          // return;
        }
      });
      setError(newErrors);

      return;
    }
    try {
      const callbackUrl = "/dashboard";
      const response = await fetcher.post("/auth/signup", form);

      if (response && response.data.message === "User created successfully") {
        const result = await signIn("credentials", {
          redirect: false,
          email: form.email,
          password: form.password,
        });

        if (result?.error) {
          setError("Invalid credentials");
        } else {
          router.push("/");
        }

        const data = await result.json();
        if (result.ok) {
          router.push(callbackUrl);
        } else {
          setError(data.error || "Something went wrong");
        }
      } else {
        setError(response.message || "Unknown error occurred");
      }
    } catch (err) {
      toast.error(err.response.data.message);

      setError(err?.message || "Error signing up");
    }
  };

  const generateDays = () => {
    return Array.from({ length: 31 }, (_, index) => index + 1);
  };
  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });

    // Clear the specific error for the field being updated
    setError({ ...Serror, [field]: "" });
  };
  const generateMonths = () => {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  };

  const handlePhoneChange = (value) => {

    if (value) {
      setForm({ ...form, phone: value }); // Update the form state with the new phone number
    } else {
      setForm({ ...form, phone: "" }); // If the value is empty, reset the phone field
    }

    setError({ ...Serror, phone: "" }); // Clear phone error after update
  };

  // Helper function to generate years for select dropdown
  const generateYears = () => {
    const currentYear = new Date().getFullYear() - 18;
    // const startYear = currentYear - 100; // Allow 100 years back
    return Array.from({ length: 101 }, (_, index) => currentYear - index);
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
          REGISTER
        </Typography>
        <FlexRowBox
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: 5,
          }}
        >
          <Image
            src="/auth/Mobile login-pana.svg"
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
              gap: 20,
            }}
          >
            <FlexRowBox
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextField
                error={Serror.fname}
                helperText={Serror.fname || ""}
                type="text"
                placeholder="First Name"
                value={form.fname}
                onChange={handleChange("fname")}
                required
                sx={{
                  width: "49%",
                  p: 0,
                  "& .MuiFormhelperText-root": {},
                }}
              />
              <TextField
                error={Serror.lname}
                helperText={Serror.lname || ""}
                type="text"
                placeholder="Last Name"
                value={form.lname}
                onChange={handleChange("lname")}
                required
                sx={{
                  width: "49%",
                  p: 0,
                  "& .MuiFormhelperText-root": {},
                }}
              />
            </FlexRowBox>

            <FlexRowBox
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextField
                error={Serror.email}
                type="email"
                helperText={Serror.email || ""}
                placeholder="Email"
                value={form.email}
                onChange={handleChange("email")}
                required
                sx={{
                  width: "49%",
                  p: 0,
                  "& .MuiFormhelperText-root": {},
                }}
              />
              <TextField
                error={Serror.CEmail}
                helperText={Serror.CEmail || ""}
                type="email"
                placeholder="Confirm Email"
                value={form.CEmail}
                onChange={handleChange("CEmail")}
                required
                sx={{
                  width: "49%",
                  p: 0,
                  "& .MuiFormhelperText-root": {},
                }}
              />
            </FlexRowBox>

            <FlexRowBox
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextField
                error={Serror.password}
                helperText={Serror.password || ""}
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange("password")}
                required
                sx={{
                  width: "49%",
                  p: 0,
                  "& .MuiFormhelperText-root": {},
                }}
              />
              <TextField
                error={Serror.CPassword}
                helperText={Serror.CPassword || ""}
                type="password"
                placeholder="Confirm Password"
                value={form.CPassword}
                onChange={handleChange("CPassword")}
                required
                sx={{
                  width: "49%",
                  p: 0,
                  "& .MuiFormhelperText-root": {},
                }}
              />
            </FlexRowBox>

            <FlexRowBox
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <FormControl fullWidth sx={{ width: "30%" }}>
                <InputLabel id="day-label">Day</InputLabel>
                <Select
                  error={Serror.day}
                  // helperText={Serror.day || ""}
                  labelId="day-label"
                  id="day"
                  name="day"
                  value={form.day}
                  onChange={handleChange("day")}
                >
                  {generateDays().map((day) => (
                    <MenuItem key={day} value={day}>
                      {day}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ width: "30%" }}>
                <InputLabel id="month-label">Month</InputLabel>
                <Select
                  error={Serror.month}
                  // helperText={Serror.month || ""}
                  labelId="month-label"
                  id="month"
                  name="month"
                  value={form.month}
                  onChange={handleChange("month")}
                >
                  {generateMonths().map((month, index) => (
                    <MenuItem key={month} value={index + 1}>
                      {month}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ width: "30%" }}>
                <InputLabel id="year-label">Year</InputLabel>
                <Select
                  error={Serror.year}
                  // helperText={Serror.year || ""}
                  labelId="year-label"
                  id="year"
                  name="year"
                  value={form.year}
                  onChange={handleChange("year")}
                >
                  {generateYears().map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FlexRowBox>
            <FlexRowBox
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <FormControl fullWidth sx={{ width: "30%" }}>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  error={Serror.gender}
                  // helperText={Serror.gender || ""}
                  labelId="gender-label"
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange("gender")}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <Box
                sx={{
                  width: "64.5%",
                }}
              >
                <PhoneInput
                  country="us"
                  value={form.phone}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "5px",
                    border: Serror.phone ? "1px solid red" : "1px solid #ccc",
                    fontSize: "1rem",
                    height: "3.5em",
                    color: "#000",
                    paddingLeft: "3em",
                  }}
                  buttonStyle={{
                    backgroundColor: "#f0f0f0",
                    border: Serror.phone ? "1px solid red" : "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                {Serror.phone && (
                  <Typography
                    color="error"
                    sx={{ m: 0, p: 0, fontSize: "0.8em" }}
                  >
                    {Serror.phone}
                  </Typography>
                )}
              </Box>
            </FlexRowBox>

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
              REGISTER
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
              Signup with google
            </Button>
            <ToastContainer />
          </form>
        </FlexRowBox>
      </Box>
    )
  );
}

// {error && <Typography color="error">{error}</Typography>}
