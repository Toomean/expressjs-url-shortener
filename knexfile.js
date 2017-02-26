// Update with your config settings.

const Rootpath = require('rootpath')
const Config = require('./src/Config')

module.exports = {
  development: {
    client: 'pg',
    connection: Config(Rootpath(__dirname + '/cfg')).pg,

    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations'
    }
  }
}
