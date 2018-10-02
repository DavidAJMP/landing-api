var api = require('./api');
var Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/api/campaigns',
    handler: api.all
  },
  {
    method: 'POST',
    path: '/api/campaign',
    handler: api.post,
    config: {
      validate: {
        payload: {
          campaign: Joi.object().required().keys({
            key: Joi.string().required(),
            description: Joi.string().required()
          })
        }
      }
    }
  }
];