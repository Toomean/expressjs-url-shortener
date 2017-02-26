/* @flow */

const knex = require('knex')

module.exports = function (cfg)
{
	let pg = {}

	pg.kx = knex(
	{
		client: 'pg',
		connection: cfg.pg,
		pool:
		{
			min: 2,
			max: 10
		}
	})

	return pg
}
