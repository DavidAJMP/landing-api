const db = require('../../db');

module.exports.findAll = async () => {
  return await db.Campaign.findAll({});
};

module.exports.create = async campaign => {
  return await db.Campaign.create(campaign);
};
