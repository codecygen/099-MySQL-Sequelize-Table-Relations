// Model-Association-for-belongsToMany-method
// Join Table for User and UserItem Tables
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
    tableName: "UsersAndUserItems",
    timestamps: false, 
  }
);

module.exports = UsersAndUserItems;