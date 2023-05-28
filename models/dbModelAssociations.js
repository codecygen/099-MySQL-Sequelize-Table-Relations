const User = require("./tables/UserTable");
const UserPass = require("./tables/UserPassTable");
const UserPost = require("./tables/UserPostTable");
const UserItem = require("./tables/UserItemTable");
const UsersAndUserItems = require("./tables/UsersAndUserItemsTable");

// One-to-One-Relation
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

// ===============================================================

// One-to-Many-Relation
// Model-Association-for-hasMany-method-for-One-to-Many-Relation
User.hasMany(UserPost, { onDelete: "CASCADE" });
// Model-Association-for-belongsTo-method-for-One-to-Many-Relation
UserPost.belongsTo(User, { onDelete: "CASCADE" });

// ===============================================================

// Many-to-Many-Relation
// Model-Association-for-belongsToMany-method
// Here, we created the join table under 
// "./models/tables/UsersAndUserItemsTable.js"
User.belongsToMany(UserItem, { through: UsersAndUserItems });
// Alternatively
// by using trough keyword, we can manually set up the "Join Table" as well.
// User.belongsToMany(UserItem, {
//   through: "UsersAndUserItems",
//   timestamps: false,
// });
// or
// User.belongsToMany(UserItem, {
//   through: "UsersAndUserItems",
//   foreignKey: "user_id"
// });
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// Model-Association-for-belongsToMany-method
// Here, we created the join table under 
// "./models/tables/UsersAndUserItemsTable.js"
UserItem.belongsToMany(User, { through: UsersAndUserItems });
// Alternatively
// by using trough keyword, we can manually set up the "Join Table" as well.
// UserItem.belongsToMany(User, {
//   through: "UsersAndUserItems",
//   timestamps: false,
// });
// or
// UserItem.belongsToMany(User, {
//   through: "UsersAndUserItems",
//   foreignKey: "userItem_id"
// });

module.exports = {
  User,
  UserPass,
  UserPost,
  UserItem,
};
