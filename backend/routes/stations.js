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
}

module.exports = routes;
