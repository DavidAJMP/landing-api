var models = require('../../models');
var Boom = require('boom');

exports.visits = {
  all: function(request, reply) {
    models.Visit.findAll()
      .then(function(visits) {
        reply(visits).code(200);
      });
  },
  post: function (request, reply) {
    let { visit } = request.payload;
    models.Visit.create(visit)
      .then(function (visit) {
        reply(visit).code(200);
      })
      .catch((error) => {
        console.log("***ERROR***\n", error);
        reply(Boom.badImplementation());
      });
  }
};