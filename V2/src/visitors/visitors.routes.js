const controller = require('./visitors.controller');

module.exports = app => {
  app.get('/visitors/:key', controller.get);
  app.post('/visitors/', controller.post);
};
