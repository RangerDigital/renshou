const StationService = require('../services/StationService');

async function routes(router) {
  router.register(require('../hooks/authHook'));

  router.get(
    '/',
    {
      schema: {
        summary: 'Get all stations.',
        tags: ['Stations'],
        security: [{ BearerAuth: [] }],
      },
    },
    async (req, res) => {
      const stations = await StationService.getAll();

      return res.send(stations);
    }
  );

  router.get(
    '/:stationId',
    {
      schema: {
        summary: 'Get station by ID.',
        tags: ['Stations'],
        security: [{ BearerAuth: [] }],
      },
    },
    async (req, res) => {
      const { stationId } = req.params;

      const station = await StationService.get(stationId);

      return res.send(station);
    }
  );

  router.post(
    '/',
    {
      schema: {
        summary: 'Create a new station.',
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

  // Measurements
  router.get(
    '/:stationId/measurements',
    {
      schema: {
        summary: 'Get all station measurements.',
        tags: ['Stations'],
        security: [{ BearerAuth: [] }],
      },
    },
    async (req, res) => {
      const { stationId } = req.params;

      const measurements = await StationService.getMeasurements(stationId);

      return res.send(measurements);
    }
  );

  router.post(
    '/:stationId/measurements',
    {
      schema: {
        summary: 'Create a new station measurement.',
        tags: ['Stations'],
        security: [{ BearerAuth: [] }],
      },
    },
    async (req, res) => {
      const { stationId } = req.params;
      const { password, values } = req.body;

      const measurement = await StationService.saveMeasurement(stationId, password, values);

      return res.send(measurement);
    }
  );

  // Alerts
  router.post(
    '/:stationId/alerts',
    {
      schema: {
        summary: 'Create a new station alert.',
        tags: ['Stations'],
        security: [{ BearerAuth: [] }],
      },
    },
    async (req, res) => {
      const { stationId } = req.params;
      const { password, message } = req.body;

      const alert = await StationService.saveAlert(stationId, password, message);

      return res.send(alert);
    }
  );
}

module.exports = routes;
