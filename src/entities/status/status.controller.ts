import { getStatus } from "./status.repository";

export async function get(req, res) {
  const dbStatus = await getStatus();

  res.send({
    statusCode: 200,
    message: `This is the Landing API, DB->${dbStatus ? "🆗" : "💥"}`,
  });
}
