const StationService = require('../services/StationService');

async function routes(router) {
  router.register(require('../hooks/authHook'));

  router.get(
    '/',
    {
      schema: {
        summary: 'Get all stations',
        tags: ['Stations'],
        security: [{ BearerAuth: [] }],
      },
    },
    async (req, res) => {
      const stations = await StationService.getAll();

      return res.send(stations);
    }
  );

  router.post(
    '/',
    {
      schema: {
        summary: 'Create station',
        tags: ['Stations'],
        security: [{ BearerAuth: [] }],

        body: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            location: { type: 'array' },
            password: { type: 'string' },
          },
        },
      },
    },
    async (req, res) => {
      const { name, location, password } = req.body;

      const station = await StationService.create(name, location, password);

      return res.send(station);
    }
  );
}

module.exports = routes;
