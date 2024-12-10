const { sequelize } = require("@/db_connection");
const { DataTypes } = require("sequelize");

const Rank = sequelize.define("Rank", {
  rankDescriptionEn: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rankNameEn: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rankWord: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cardId: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  rankName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cardType: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  trendTag: {
    type: DataTypes.JSONB, // Use JSONB for storing JSON objects
    allowNull: true,
  },
  rankDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rankWordEn: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  secondCategoryId: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Rank;
