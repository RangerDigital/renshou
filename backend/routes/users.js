const UserService = require('../services/UserService');

async function routes(router) {
  router.register(require('../hooks/authHook'));

  router.get(
    '/',
    {
      schema: {
        summary: 'Get all users.',
        tags: ['Users'],
        security: [{ BearerAuth: [] }],
      },
    },
    async (req, res) => {
      const users = await UserService.getAll();

      return res.send(users);
    }
  );

  router.post(
    '/',
    {
      schema: {
        summary: 'Create a new user.',
        tags: ['Users'],
        security: [{ BearerAuth: [] }],

        body: {
          type: 'object',
          properties: {
            email: { type: 'string' },
          },
          required: ['email'],
        },

        response: {
          200: {
            type: 'object',
            properties: {
              _id: { type: 'string' },
              email: { type: 'string' },
            },
          },
        },
      },
    },
    async (req, res) => {
      const { email } = req.body;

      const user = await UserService.create(email);

      return res.send(user);
    }
  );

  router.get(
    '/me',
    {
      schema: {
        summary: 'Get the currently authenticated user.',
        tags: ['Users'],
        security: [{ BearerAuth: [] }],

        response: {
          200: {
            type: 'object',
            properties: {
              email: { type: 'string' },
            },
          },
        },
      },
    },
    async (req, res) => {
      const user = await UserService.get(req.userId);

      return res.send(user);
    }
  );

  router.patch(
    '/me',
    {
      schema: {
        summary: 'Update the currently authenticated user.',
        tags: ['Users'],
        security: [{ BearerAuth: [] }],

        body: {
          type: 'object',
          properties: {
            email: { type: 'string' },
          },
          required: ['email'],
        },

        response: {
          200: {
            type: 'object',
            properties: {
              email: { type: 'string' },
            },
          },
          400: {
            type: 'object',
            properties: {
              msg: { type: 'string' },
            },
          },
        },
      },
    },
    async (req, res) => {
      const { email } = req.body;

      const { success, user } = await UserService.updateEmail(req.userId, email);

      if (success) {
        return res.send(user);
      }

      return res.code(400).send({ msg: 'This email is already taken!' });
    }
  );
}

module.exports = routes;
