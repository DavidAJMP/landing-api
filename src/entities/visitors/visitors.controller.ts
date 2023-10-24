import { findAll, create } from "./visitors.repository";
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
    const { visitor } = req.body;
    const { key } = req.params;

    const newVisitor = await create(key, visitor);

    if (newVisitor) res.json(newVisitor);
    else {
      res.status(404).json({ message: "Campaign not found" });
    }
  } catch (error) {
    res.status(500).send(badImplementation(error));
  }
}
