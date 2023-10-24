import cors = require("cors");
import express = require("express");
import { readdirSync } from "fs";
import { resolve } from "path";
import helmet from "helmet";

import statusRoutes from "./entities/status/status.routes";
import campaignsRoutes from "./entities/campaigns/campaigns.routes";
import pagesRoutes from "./entities/pages/pages.routes";
import visitorsRoutes from "./entities/visitors/visitors.routes";
import visitsRoutes from "./entities/visits/visits.routes";

const app = express();
const { json, urlencoded } = express;

app.use(
  helmet({
    hsts: false,
  })
);

const { NODE_ENV } = process.env;

const isDevEnvironment = NODE_ENV === "development";

app.use(
  json({
    limit: "100mb",
  })
);

app.use(
  urlencoded({
    extended: true,
    limit: "100mb",
  })
);

app.use(cors());

statusRoutes(app);
campaignsRoutes(app);
pagesRoutes(app);
visitorsRoutes(app);
visitsRoutes(app);

if (isDevEnvironment) {
  console.log("Available endpoints:");
  app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
      console.log(r.route.stack[0].method, r.route.path);
    }
  });
}

//500 internat server error handler
app.use((error, req, res, next) => {
  console.error(`${req.method} ${req.url} ${error.message}`);

  return res.status(500).send({
    error: isDevEnvironment ? error.message : "An internal error ocurred",
  });
});

//404 not found handler
app.use((req, res, next) => {
  res
    .status(404)
    .json({ message: `${req.method} ${req.originalUrl} not found` });
});

export default app;
