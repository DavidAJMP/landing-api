import { get, post } from "./visitors.controller";

export default (app) => {
  app.get("/visitors/:key", get);
  app.post("/visitors/", post);
};
