const User = require('../models/user');

exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.getAllUsers();
    res.status(200).json(allUsers.rows);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getByID = async (req, res, next) => {
    try {
        const getResponse = await User.getByID(req.params.id);
        res.status(200).json(getResponse.rows);
    } catch (err) {
        if (!err.statusCode) {
            err.staturCode = 500;
        }
        next(err);
    }
};

exports.addUser = async (req, res, next) => {
  try {
    const postResponse = await User.addUser(req.body.name, req.body.email);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const putResponse = await User.updateUser(req.params.id, req.body.name, req.body.email);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const deleteResponse = await User.deleteUser(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};