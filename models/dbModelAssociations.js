const User = require("./tables/userTable");
const UserPass = require("./tables/userPassTable");

// Model-Association-for-hasOne-method
// This association enables methods like 
// set+UserPass, get+UserPass, create+UserPass
User.hasOne(UserPass);
// Alternatively
// User.hasOne(UserPass, { foreignKey: { name: 'userIDs', allowNull: false, type: DataTypes.INTEGER } });
// or
// User.hasOne(UserPass, { foreignKey: "userIDs" });
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Model-Association-for-belongsTo-method
// This association enables methods like 
// set+User, get+User, create+User
UserPass.belongsTo(User);
// Alternatively
// if you want foreignKey to be not the default "userId"
// UserPass.belongsTo(User, { foreignKey: { name: 'userIDs', allowNull: false, type: DataTypes.INTEGER } });
// or
// UserPass.belongsTo(User, { foreignKey: "userIDs" });

module.exports = {
  User,
  UserPass,
};
