const mysql2 = require('mysql2');
const Sequelize = require('sequelize');
const fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var db = {};

const { LANDING_CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(LANDING_CONNECTION_STRING, {
  logging: false,
  dialect: 'mysql',
  dialectModule: mysql2,
  pool: {
    max: 10,
    min: 1,
    acquire: 50 * 1000, //5 seconds
    idle: 50 * 1000
  }
});

fs.readdirSync(__dirname)
  .filter(function(file) {
    return file.indexOf('.') !== 0 && file !== basename;
  })
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

console.log(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
