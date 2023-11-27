export default () => ({
  enviroment: process.env.NODE_ENV || 'development',
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  },
});
