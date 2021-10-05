const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');

const app = express();

app.use(
  helmet({
    hsts: false
  })
);

const { NODE_ENV } = process.env;

const isDevEnvironment = NODE_ENV === 'development';

app.use(
  express.json({
    limit: '100mb'
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: '100mb'
  })
);

app.use(cors());

const source = `${__dirname}/src`;

fs.readdirSync(source).forEach(folder => {
  const fileName = `${folder}.routes.js`;
  const route = path.resolve(source, folder, fileName);

  try {
    require(route)(app);
  } catch (error) {
    console.error(`Routes from ${folder} can't be loaded`, error);
  }
});

if (isDevEnvironment) {
  console.log('Available endpoints:');
  app._router.stack.forEach(r => {
    if (r.route && r.route.path) {
      console.log(r.route.stack[0].method, r.route.path);
    }
  });
}

//500 internat server error handler
app.use((error, req, res, next) => {
  console.error(`${req.method} ${req.url} ${error.message}`);

  return res.status(500).send({
    error: isDevEnvironment ? error.message : 'An internal error ocurred'
  });
});

//404 not found handler
app.use((req, res, next) => {
  res
    .status(404)
    .json({ message: `${req.method} ${req.originalUrl} not found` });
});

module.exports = app;
