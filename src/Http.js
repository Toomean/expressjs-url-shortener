
const express    = require('express')
const body_parser = require('body-parser')
const sass       = require('node-sass-middleware')

module.exports = function Http (rootpath, cfg, db)
{
	let http = {}

	http.express = express()

	http.express.set('views', rootpath('views'))
	http.express.set('view engine', 'pug')

	http.express.use(body_parser.json({ limit: '256kb' }))
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

	http.express.get('/:hash', (rq, rs) =>
	{
		return db.hash.get(rq.params.hash)
		.then(so =>
		{
			rs.redirect(so.origin)
		})
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
