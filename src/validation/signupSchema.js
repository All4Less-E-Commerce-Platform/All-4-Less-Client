import Joi from "joi";

// Schema for sign-up validation
export const SignupSchema = Joi.object({
  fname: Joi.string().min(2).max(50).required().messages({
    "string.base": `"First Name" should be a type of 'text'`,
    "string.empty": `"First Name" cannot be empty`,
    "string.min": `"First Name" should have 2 characters at least`,
    "any.required": `"First Name" is a required field`,
  }),

  lname: Joi.string().min(2).max(50).required().messages({
    "string.base": `"Last Name" should be a type of 'text'`,
    "string.empty": `"Last Name" cannot be empty`,
    "string.min": `"Last Name" should have 2 characters at least`,
    "any.required": `"Last Name" is a required field`,
  }),
  email: Joi.string()
    .pattern(/^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com)$/)
    .required()
    .messages({
      "string.base": `"Email" should be a type of 'text'`,
      "string.pattern.base": `"Email" must be a valid Gmail, or Outlook`,
      "string.empty": `"Email" cannot be empty`,
      "any.required": `"Email" is a required field`,
    }),

  CEmail: Joi.string()
    .email({ tlds: { allow: false } })
    .valid(Joi.ref("email"))
    .required()
    .messages({
      "string.base": `"Confirm Email" should be a type of 'text'`,
      "string.email": `"Confirm Email" must be a valid email address`,
      "any.required": `"Confirm Email" is a required field`,
      "string.empty": `"Confirm Email" cannot be empty`,
      "any.only": `"Confirm Email" must match the "Email" field`,
    }),

  password: Joi.string().min(6).required().messages({
    "string.base": `"Password" should be a type of 'text'`,
    "string.min": `"Password" should have 6 characters at least`,
    "any.required": `"Password" is a required field`,
    "string.empty": `"Password" cannot be empty`,
  }),

  CPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.base": `"Confirm Password" should be a type of 'text'`,
    "any.required": `"Confirm Password" is a required field`,
    "any.only": `"Confirm Password" must match the "Password" field`,
    "string.empty": `"Confirm Password" cannot be empty`,
  }),

  day: Joi.number().min(1).max(31).required().messages({
    "number.base": `"Day" should be a type of 'number'`,
    "number.min": `"Day" must be between 1 and 31`,
    "number.max": `"Day" must be between 1 and 31`,
    "any.required": `"Day" is a required field`,
  }),

  month: Joi.number().min(1).max(12).required().messages({
    "number.base": `"Month" should be a type of 'number'`,
    "number.min": `"Month" must be between 1 and 12`,
    "number.max": `"Month" must be between 1 and 12`,
    "any.required": `"Month" is a required field`,
  }),

  year: Joi.number()
    .min(1900)
    .max(new Date().getFullYear() - 18)
    .required()
    .messages({
      "number.base": `"Year" should be a type of 'number'`,
      "number.min": `"Year" must be after 1900`,
      "number.max": `"Year" must be at least 18 years ago`,
      "any.required": `"Year" is a required field`,
    }),

  gender: Joi.string().required().messages({
    "string.base": `"Gender" should be a type of 'text'`,
    "any.required": `"Gender" is a required field`,
    "string.empty": `"Gender" cannot be empty`,
  }),

  phone: Joi.string().min(7).max(15).required().messages({
    "string.base": `"Phone" should be a type of 'text'`,
    "string.min": `"Phone" should have 10 digits`,
    "string.max": `"Phone" should have 10 digits`,
    "any.required": `"Phone" is a required field`,
    "string.empty": `"Phone" cannot be empty`,
  }),
});
