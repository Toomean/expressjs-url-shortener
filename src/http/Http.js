
const express    = require('express')
const bodyParser = require('body-parser')
const sass       = require('node-sass-middleware')

module.exports = function Http (app)
{
	var http = {}

	http.express = express()

	http.express.set('views', app.root('views'))
	http.express.set('view engine', 'pug')

	http.express.use(bodyParser.json())
	http.express.use(bodyParser.urlencoded({ extended: false }))
	http.express.use(sass(
	{
	  src: app.root('public'),
	  dest: app.root('public'),
	  indentedSyntax: true,
	  sourceMap: true
	}))
	http.express.use(express.static(app.root('public')))

	http.api = {}

	http.express.get('/', (rq, rs) =>
	{
		rs.render('index', { title: 'Express' })
	})

	http.listen = () =>
	{
		return new Promise(rs =>
		{
			return http.express.listen(3000, rs)
		})
	}

	return http
}
