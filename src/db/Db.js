/* @flow */

const Pg = require('./Pg')

const Hash = require('./models/Hash')

module.exports = function Db (cfg)
{
	let db = {}

	db.pg = Pg(cfg)

	db.knex = db.pg.kx

	db.hash = Hash(db)

	return db
}
