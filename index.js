require("dotenv").config();

const { sequelize, databaseAuth } = require("./models/dbConnection");

const {
  bulkCreateUserAndPass,
  createOneUserAndPass,
} = require("./models/dataHandling");

sequelize
  .sync({ alter: true })
  .then(async (result) => {
    await databaseAuth();
    await bulkCreateUserAndPass();
    // await createOneUserAndPass();
  })
  .catch((err) => {
    console.error(err);
  });
