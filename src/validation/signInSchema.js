import Joi from "joi";

export const SigninSchema = Joi.object({
  email: Joi.string()
    .pattern(/^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com)$/)
    .required()
    .messages({
      "string.base": `"Email" should be a type of 'text'`,
      "string.pattern.base": `"Email" must be a valid Gmail, or Outlook`,
      "string.empty": `"Email" cannot be empty`,
      "any.required": `"Email" is a required field`,
    }),
  password: Joi.string().min(6).required().messages({
    "string.base": `"Password" should be a type of 'text'`,
    "string.min": `"Password" should have 6 characters at least`,
    "any.required": `"Password" is a required field`,
    "string.empty": `"Password" cannot be empty`,
  }),
});
