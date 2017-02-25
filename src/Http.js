
const express    = require('express')
const bodyParser = require('body-parser')
const sass       = require('node-sass-middleware')

module.exports = function Http (rootpath, cfg)
{
	let http = {}

	http.express = express()

	http.express.set('views', rootpath('views'))
	http.express.set('view engine', 'pug')

	http.express.use(bodyParser.json())
	http.express.use(bodyParser.urlencoded({ extended: false }))
	http.express.use(sass(
	{
	  src: rootpath('public'),
	  dest: rootpath('public'),
	  indentedSyntax: true,
	  sourceMap: true
	}))
	http.express.use(express.static(rootpath('public')))

	http.api = {}

	http.express.get('/', (rq, rs) =>
	{
		rs.render('index', { title: 'Express' })
	})

	http.listen = () =>
	{
		return new Promise(rs =>
		{
			return http.express.listen(cfg.port, rs)
		})
	}

	return http
}
