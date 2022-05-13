//const { application } = require('express');
const db = require('../config/database');

module.exports = class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static getAllUsers() {
    return db.query('SELECT * FROM users');
  }

  static getByID(id){
    return db.query('SELECT * FROM users where id = $1', [id]);
  }

  static addUser(name, email) {
    return db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
  }

  static updateUser(id, name, email) {
    console.log(id, name, email)
    return db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
  }

  static deleteUser(id) {
    return db.query('DELETE FROM users WHERE id = $1', [id]);
  }
};