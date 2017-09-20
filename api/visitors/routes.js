var api = require('./api');
var Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/api/visitors',
    handler: api.visitors.all
  },
  {
    method: 'POST',
    path: '/api/visitor',
    handler: api.visitors.post,
    config: {
      validate: {
        payload: {
          visitor: Joi.object().required().keys({
            name: Joi.string().required(),
            email: Joi.string().required(),
            phone: Joi.string().required()
          })
        }
      }
    }
  }
];