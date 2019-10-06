const controller = require('./visits.controller');

module.exports = app => {
  app.get('/visits/:key', controller.get);
  app.post('/visits/', controller.post);
};
