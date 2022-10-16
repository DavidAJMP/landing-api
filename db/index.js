import mysql2 from "mysql2";
import Sequelize from "sequelize";
import { readdirSync } from "fs";
import { basename as _basename, join } from "path";
var basename = _basename(module.filename);
var db = {};

const { LANDING_CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(LANDING_CONNECTION_STRING, {
  logging: false,
  dialect: "mysql",
  dialectModule: mysql2,
  pool: {
    max: 10,
    min: 1,
    acquire: 50 * 1000, //5 seconds
    idle: 50 * 1000,
  },
});

readdirSync(__dirname)
  .filter(function (file) {
    return file.indexOf(".") !== 0 && file !== basename;
  })
  .forEach(function (file) {
    if (file.slice(-3) !== ".js") return;
    var model = sequelize["import"](join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
