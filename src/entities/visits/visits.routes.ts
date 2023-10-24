import { get, post } from "./visits.controller";

export default (app) => {
  app.get("/visits/:key", get);
  app.post("/visits/", post);
};
