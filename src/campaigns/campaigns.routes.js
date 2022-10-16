const controller = require('./campaigns.controller');

module.exports = app => {
  app.get('/campaigns/', controller.get);
  app.post('/campaigns/', controller.post);
};
