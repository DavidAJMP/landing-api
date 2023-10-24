require("dotenv").config();
import server from "./server";
import db from "./db";

const { PORT } = process.env;

const app = async () => {
  try {
    console.log(`🚀 Application connecting to LANDING DB...`);
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    console.log(`🚀 Application connected to LANDING DB`);

    return server.listen(PORT, () => {
      console.log(`✅ Landing API running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("💥 Error trying to connect to DB: ", error);
    process.exit(1);
  }
};

export default app();
