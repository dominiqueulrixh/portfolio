export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env(
    'PUBLIC_URL',
    env('NODE_ENV') === 'production'
      ? 'https://admin.dominiqueulrich.ch'
      : undefined
  ),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});
