const controller = require('./pages.controller');

module.exports = app => {
  app.get('/pages/:key', controller.get);
  app.post('/pages/', controller.post);
};
