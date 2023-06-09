const Sequelize = require("sequelize");
const { sequelize } = require("../dbConnection");

const UserPass = sequelize.define(
  "UserPass",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UserPass;
