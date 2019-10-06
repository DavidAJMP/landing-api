const db = require('../../db');

module.exports.getStatus = async () => {
  const result = await db.sequelize.query('SELECT 1 + 1 FROM DUAL;');
  return result;
};
