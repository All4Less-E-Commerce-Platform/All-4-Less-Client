import dotenv from "dotenv";

dotenv.config(); // Load the .env file into process.env
export const options = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  logging: false,
  port: Number(process.env.DB_PROD),
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This forces SSL connection.
      rejectUnauthorized: false, // This allows self-signed certificates.
    },
  },
  logging: process.env.NODE_ENV === "development",
  migrationStorageTableName: "migrations",
};

// console.log({
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

if (process.env.NODE_ENV !== "development") {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: true,
    },
  };
}

export default {
  development: options,
  test: options,
  production: options,
};
