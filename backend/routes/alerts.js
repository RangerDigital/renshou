const AlertService = require('../services/AlertService');

async function routes(router) {
  router.register(require('../hooks/authHook'));

  router.get(
    '/',
    {
      schema: {
        summary: 'Get all alerts.',
        tags: ['Alerts'],
        security: [{ BearerAuth: [] }],
      },
    },
    async (req, res) => {
      const alerts = await AlertService.getAll();

      return res.send(alerts);
    }
  );
}

module.exports = routes;
