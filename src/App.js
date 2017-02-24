
require('console-ultimate/global').replace()

const Rootpath = require('rootpath')

const Http = require('./http/Http')

module.exports = function App ()
{
	let app = {}

	app.root = Rootpath(__dirname, '..')

	app.http = Http(app)

	app.start = function ()
	{
		return Promise.resolve()
		.then(() =>
		{
			app.http.listen()
		})
		.then(() =>
		{
			console.log('App listening on port 3000')
		})
	}

	return app
}
