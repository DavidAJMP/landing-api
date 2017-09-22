var api = require('./api');
var Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/api/visits/{key}',
    handler: api.visits.all,
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
    path: '/api/visit/{key}',
    handler: api.visits.post,
    config: {
      validate: {
        params: {
          key: Joi.string().required()
        },
        payload: {
          visit: Joi.object().required().keys({
            ip: Joi.string().required(),
            location: Joi.string().optional()
          })
        }
      }
    }
  }
];