const Sequelize = require("sequelize");
const { sequelize } = require("../dbConnection");

const UsersAndUserItems = sequelize.define(
  "UsersAndUserItems",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    tableName: "usersAndUserItems",
    timestamps: false, 
  }
);

module.exports = UsersAndUserItems;