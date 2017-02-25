/* @flow */

const fs_sync = require('fs-sync')

const exists = fs_sync.exists
const load = fs_sync.readJSON

const merge = require('lodash/merge')

module.exports = function Config (rootpath)
{
	let cfg = load(rootpath('cfg.json'))

	let dev = rootpath('dev.json')

	if (exists(dev))
	{
		cfg = merge({}, cfg, load(dev))
	}

	return cfg
}
