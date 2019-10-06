require('dotenv').config();
const server = require('./server');
const db = require('./db');

const { PORT } = process.env;

(async () => {
  try {
    console.log(`🚀 Application connecting to LANDING DB...`);
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    console.log(`🚀 Application connected to LANDING DB`);

    server.listen(PORT, () => {
      console.log(`✅ Landing API running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('💥 Error trying to connect to DB: ', error);
    process.exit(1);
  }
})();
