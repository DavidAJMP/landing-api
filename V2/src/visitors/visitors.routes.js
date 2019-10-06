const controller = require('./visitors.controller');

module.exports = app => {
  app.get('/visitors/', controller.get);
};
