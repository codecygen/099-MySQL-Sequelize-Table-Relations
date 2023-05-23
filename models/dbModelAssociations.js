const User = require("./tables/userTable");
const UserPass = require("./tables/userPassTable");

// "foreignKey" property changes default foreign key from "userId" to "userIDs"
const setModelAssociations = () => {
  User.hasOne(UserPass, { foreignKey: "userIDs" });

  console.log("Model associations are set!");
};

module.exports = {
  setModelAssociations,
};
