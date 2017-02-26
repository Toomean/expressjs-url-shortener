
exports.up = function(knex, Promise)
{
	return Promise.resolve()
	.then(() =>
	{
		return knex.schema.createTable('hashes', table =>
		{
			table.increments('id').primary()
			table.string('origin', 2000)
			table.string('hash')
			table.timestamp('created_at')
			table.timestamp('expired_at')
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
