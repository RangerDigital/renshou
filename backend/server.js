const app = (fastify = require('fastify')({
  logger: { level: 'warn' },
  ignoreTrailingSlash: true,
}));

app.register(require('fastify-swagger'), {
  routePrefix: '/docs',
  exposeRoute: true,

  openapi: {
    info: {
      title: 'Renshou - API Service',
      description: '👩🏻‍🌾 Monitoring system aggregating data on hydrological and air quality hazards.',
      version: '0.1.0',
    },
    tags: [
      { name: 'Users', description: '👱 User management endpoints.' },
      { name: 'Auth', description: '🔒 User authentication endpoints.' },
    ],
    servers: [
      { url: 'http://127.0.0.1:3000', description: 'Development' },
      { url: 'https://renshou.bednarski.dev/api', description: 'Production' },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
  },
});

const stations = require('./routes/stations');
const users = require('./routes/users');
const auth = require('./routes/auth');
const alerts = require('./routes/alerts');

app.register(stations, { prefix: '/stations' });
app.register(users, { prefix: '/users' });
app.register(auth, { prefix: '/auth' });
app.register(alerts, { prefix: '/alerts' });

module.exports = app;
