const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !lastname || !email || !password) {
    throw new Error('Please provide all fields');
  }

  const user = await userModel.create({
    fullname: {
      firstname,
      lastname
    },
    email,
    password
  });

  return user;
};
