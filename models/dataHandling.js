const { User, UserPass } = require("./dbModelAssociations");

const bulkCreateUserAndPass = async () => {
  const bulkUserSet = [
    {
      name: "aras",
      email: "aras@gmail.com",
    },
    {
      name: "jordan",
      email: "jordan12@gmail.com",
    },
    {
      name: "jason",
      email: "jason341@gmail.com",
    },
  ];

  const bulkPassSet = [
    {
      password: "arasPass",
    },
    {
      password: "jordanPass",
    },
    {
      password: "jasonPass",
    },
  ];

  try {
    const createdUsers = await User.bulkCreate(bulkUserSet);
    const createdUserPasses = await UserPass.bulkCreate(bulkPassSet);

    for (let i = 0; i < createdUserPasses.length; i++) {
      // set+UserPass is coming from the model, sequelize automatically
      // creates this method so that these 2 models can be associated.
      await createdUsers[i].setUserPass(createdUserPasses[i]);
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  bulkCreateUserAndPass,
};
