// Modules
import appConfig from './app.config'

export const ArenaConfig = {
  hostId: 'localhost',
  redis: {
      host: appConfig.redis.host,
      port: appConfig.redis.port,
      password: appConfig.redis.password
  },
};