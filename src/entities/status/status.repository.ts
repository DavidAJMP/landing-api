import db from "../../db";

export async function getStatus() {
  const result = await db.sequelize.query("SELECT 1 + 1 FROM DUAL;");
  return result;
}
