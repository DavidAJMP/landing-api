import * as controller from "./campaigns.controller";

export default function (app) {
  app.get("/campaigns/", controller.get);
  app.post("/campaigns/", controller.post);
}
