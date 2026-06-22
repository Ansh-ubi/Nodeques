const userModel = require("../models/userModel");

const createUser = async (data) => {
  const { name, email } = data;

  if (!name || !email) {
    throw new Error("Name and Email are required");
  }

  const existingUser =
    await userModel.findUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const result =
    await userModel.createUser(name, email);

  return {
    id: result.insertId,
    name,
    email,
  };
};

const getUsers = async () => {
  return await userModel.getUser();
};

module.exports = {
  createUser,
  getUsers,
};