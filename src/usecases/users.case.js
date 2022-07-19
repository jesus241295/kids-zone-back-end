const Users = require("../models/users.model");

async function getUser() {
  const getUsers = await Users.find({});
  return getUsers;
}
async function postsUsers(posts) {
  const newUser = new Users(posts);
  await Users.create(newUser);
  return newUser;
}
module.exports = {
  postsUsers,
  getUser,
};
