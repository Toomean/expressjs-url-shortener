/* @flow */

const Pg = require('./Pg')

module.exports = function Db (cfg)
{
	let db = {}

	db.pg = Pg(cfg)

	return db
}
