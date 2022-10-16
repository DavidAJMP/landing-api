const controller = require('./status.controller');

module.exports = app => {
  app.get('/', controller.get);
};
