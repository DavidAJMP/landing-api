var Hapi = require('hapi');
var models = require('./models');

// create the server
var server = new Hapi.Server();
server.connection({ routes: { cors: true }, port: 3000 });

// routes
server.route(require('./api/visitors/routes'));
server.route(require('./api/visits/routes'));
server.route(require('./api/campaigns/routes'));

server.route({
    method: 'GET',
    path: '/api',
    handler: function (request, reply) {
        reply({ 'api': 'hello world!' });
    }
});

models.sequelize.sync().then(function () {
    server.start(function () {
        console.log('Running on 3000');
    });
});
