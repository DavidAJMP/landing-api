import { get, post } from "./pages.controller";

export default (app) => {
  app.get("/pages/:key", get);
  app.post("/pages/", post);
};
