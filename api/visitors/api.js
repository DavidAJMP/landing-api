var models = require('../../models');
var Boom = require('boom');

exports.visitors = {
  all: function (request, reply) {
    models.Visitor.findAll()
      .then(function (visitors) {
        reply(visitors).code(200);
      });
  },
  post: function (request, reply) {
    let { visitor } = request.payload;
    models.Visitor.create(visitor)
      .then(function (visitor) {
        reply(visitor).code(200);
      })
      .catch((error) => {
        reply(Boom.badImplementation());
      });
  }
};