
require('console-ultimate/global').replace()

const Rootpath = require('rootpath')

const Config = require('./Config')
const Http = require('./Http')

module.exports = function App ()
{
	let app = {}

	app.root = Rootpath(__dirname, '..')

	app.cfg = Config(app.root.partial('cfg'))

	app.http = Http(app.root, app.cfg.http)

	app.start = function ()
	{
		return Promise.resolve()
		.then(() =>
		{
			app.http.listen()
		})
		.then(() =>
		{
			console.log(`App listening on port ${app.cfg.http.port} `)
		})
	}

	return app
}
