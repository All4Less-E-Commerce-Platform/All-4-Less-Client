// models/user.js

import { sequelize } from "@/db_connection";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "User",
  {
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validates that the email format is correct
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true, // Ensures phone number contains only numbers
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["male", "female", "other"]], // Validates gender values
      },
    },
  },
  {
    // Optional model options
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
    tableName: "users", // Optional if you want to customize the table name
  },
);

export default User;
