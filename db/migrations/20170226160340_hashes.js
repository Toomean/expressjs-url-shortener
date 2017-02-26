
exports.up = function(knex, Promise)
{
	return Promise.resolve()
	.then(() =>
	{	
		return knex.schema.createTable('hashes', table =>
		{
			table.increments('id').primary()
			table.string('origin', 2000)
			table.string('hash').unique()
			table.timestamp('created_at').defaultTo(knex.fn.now())
			table.timestamp('expired_at').notNullable()
		})
	})  
}

exports.down = function(knex, Promise)
{
	return Promise.resolve()
	.then(() =>
	{
		return knex.schema.dropTableIfExists('hashes')
	})  
}
