const { User, UserPass } = require("./dbModelAssociations");

const bulkCreateUserAndPass = () => {
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

  User.bulkCreate(bulkUserSet)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.error(err));

  UserPass.bulkCreate(bulkPassSet)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.error(err));
};

module.exports = {
  bulkCreateUserAndPass,
};
