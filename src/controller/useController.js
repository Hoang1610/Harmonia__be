const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const postUsers = async (req, res) => {
  const { email, pass, name } = req.body;
  const hashPassWord = await bcrypt.hash(pass, saltRounds);
  try {
    const data = await User.create({
      email,
      pass: hashPassWord,
      name,
    });
    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
    return;
  }
};
const getApiUser = async (req, res) => {
  const data = await User.find();
  return res.status(200).json({
    data,
  });
};
module.exports = { postUsers, getApiUser };
