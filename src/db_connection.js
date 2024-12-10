import { Sequelize } from "sequelize";
import { options } from "../database/config/config.mjs";

const dbOptions = options;
dbOptions.dialectModule = require("pg");

export const sequelize = new Sequelize(dbOptions);
