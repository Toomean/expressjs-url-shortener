/* @flow */

const table = require('knexed/table/table')
const one = require('knexed/one')

module.exports = function Hash (db)
{
	let hash = {}

	let knex = db.knex
	let hashes = table(knex, 'hashes')

	hash.create = () =>
	{

	}

	hash.get = (hash) =>
	{
		return hashes().select()
		.where('hash', 'a')
		.then(one)
	}

	hash.delete = () =>
	{

	}

	return hash
}
