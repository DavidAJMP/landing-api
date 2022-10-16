require("dotenv").config();
import { listen } from "./server";
import { sequelize } from "./db";

const { PORT } = process.env;

(async () => {
  try {
    console.log(`🚀 Application connecting to LANDING DB...`);
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`🚀 Application connected to LANDING DB`);

    listen(PORT, () => {
      console.log(`✅ Landing API running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("💥 Error trying to connect to DB: ", error);
    process.exit(1);
  }
})();
