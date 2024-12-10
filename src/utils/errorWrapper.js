// utils/errorWrapper.js
import { CustomError } from "./CustomError";

export const errorWrapper = (handler) => async (req, res) => {
  try {
    return await handler(req, res);
  } catch (error) {
    console.error("API Error:", error);
    const status = error instanceof CustomError ? error.status : 500;
    const message = error.message || "Internal Server Error";

    return new Response(JSON.stringify({ success: false, message }), {
      status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
