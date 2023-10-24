import { get } from "./status.controller";

export default (app) => {
  app.get("/", get);
};
