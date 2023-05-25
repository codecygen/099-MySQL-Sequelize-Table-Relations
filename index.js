require("dotenv").config();

const { sequelize, databaseAuth } = require("./models/dbConnection");

const {
  bulkCreateUserAndPass,
  createOneUserAndPass,
  bulkCreatePassAndUser,
  createOnePassAndUser,
} = require("./models/dataHandling");

sequelize
  .sync({ alter: true })
  .then(async (result) => {
    await databaseAuth();

    // await bulkCreateUserAndPass();
    // await createOneUserAndPass();
    // await bulkCreatePassAndUser();
    // await createOnePassAndUser();
  })
  .catch((err) => {
    console.error(err);
  });
