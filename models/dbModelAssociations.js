const User = require("./tables/userTable");
const UserPass = require("./tables/userPassTable");
const UserPost = require("./tables/userPostTable");

// Model-Association-for-hasOne-method
// This association enables methods like
// set+UserPass, get+UserPass, create+UserPass
// onDelete: "CASCADE" makes it possible that
// when a User entry is deleted, associated UserPass will also
// be automatically be deleted.
User.hasOne(UserPass, { onDelete: "CASCADE" });
// Alternatively
// onUpdate: "CASCADE ensures the foreignKey is updated accordingly in other table.
// User.hasOne(UserPass, { onUpdate: "CASCADE" });
// User.hasOne(UserPass);
// if you want foreignKey to be not the default "userId"
// User.hasOne(UserPass, { foreignKey: { name: 'userIDs', allowNull: false, type: DataTypes.INTEGER } });
// or
// User.hasOne(UserPass, { foreignKey: "userIDs" })
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Model-Association-for-belongsTo-method
// This association enables methods like
// set+User, get+User, create+User
// onDelete: "CASCADE" makes it possible that
// when a UserPass entry is deleted, associated User will also
// be automatically be deleted.
UserPass.belongsTo(User, { onDelete: "CASCADE" });
// Alternatively
// onUpdate: "CASCADE ensures the foreignKey is updated accordingly in other table.
// UserPass.belongsTo(User, { onUpdate: "CASCADE" });
// UserPass.belongsTo(User);
// if you want foreignKey to be not the default "userId"
// UserPass.belongsTo(User, { foreignKey: { name: 'userIDs', allowNull: false, type: DataTypes.INTEGER } });
// or
// UserPass.belongsTo(User, { foreignKey: "userIDs" });

module.exports = {
  User,
  UserPass,
  UserPost,
};
