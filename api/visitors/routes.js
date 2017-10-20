var api = require('./api');
var Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/api/visitors/{key}',
    handler: api.all,
    config: {
      validate: {
        params: {
          key: Joi.string().required()
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/api/visitor/{key}',
    handler: api.post,
    config: {
      validate: {
        params: {
          key: Joi.string().required()
        },
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