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
      // Model-Association-for-hasOne-method
      // set+UserPass is coming from the model name, sequelize automatically
      // creates this method so that these 2 models can be associated.
      await createdUsers[i].setUserPass(createdUserPasses[i]);
    }
  } catch (err) {
    console.error(err);
  }

  try {
    const foundUser = await User.findOne({ where: { name: "aras" } });
    // Model-Association-for-hasOne-method
    // get+UserPass is coming from the model, sequelize automatically 
    // creates this method so that these 2 models can be associated.
    const foundUserPass = await foundUser.getUserPass();

    // This should show the foundUserPass
    console.log(foundUserPass);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  bulkCreateUserAndPass,
};
