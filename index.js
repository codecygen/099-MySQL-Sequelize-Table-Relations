require("dotenv").config();

const { sequelize, databaseAuth } = require("./models/dbConnection");

const { bulkCreateUserAndPass } = require("./models/dataHandling");

sequelize
  .sync({ alter: true })
  .then(async (result) => {
    await databaseAuth();
    bulkCreateUserAndPass();
  })
  .catch((err) => {
    console.error(err);
  });
