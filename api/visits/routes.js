var api = require('./api');
var Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/api/visits',
    handler: api.visits.all
  },
  {
    method: 'POST',
    path: '/api/visit',
    handler: api.visits.post,
    config: {
      validate: {
        payload: {
          visit: Joi.object().required().keys({
            ip: Joi.string().required(),
            location: Joi.string().required()
          })
        }
      }
    }
  }
];