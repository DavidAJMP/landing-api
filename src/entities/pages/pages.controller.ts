import { findAll, create } from "./pages.repository";
import { badImplementation } from "boom";

export async function get(req, res, next) {
  try {
    const { key } = req.params;
    const result = await findAll(key);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(badImplementation(error));
  }
}

export async function post(req, res, next) {
  try {
    const { page } = req.body;
    const { key } = req.params;

    const newPage = await create(key, page);

    if (newPage) res.json(newPage);
    else {
      res.status(404).json({ message: "Campaign not found" });
    }
  } catch (error) {
    res.status(500).send(badImplementation(error));
  }
}
