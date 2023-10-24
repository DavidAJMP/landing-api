import * as mysql2 from "mysql2";
import { Sequelize, DataTypes } from "sequelize";
import { basename as _basename, join } from "path";
var db: any = {};

import campaign from "./campaign";
import page from "./page";
import visit from "./visit";
import visitor from "./visitor";

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

db.Campaign = campaign(sequelize, DataTypes);
db.Page = page(sequelize, DataTypes);
db.Visit = visit(sequelize, DataTypes);
db.Visitor = visitor(sequelize, DataTypes);

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
