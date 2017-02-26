
const moment = require('moment')
const hash_seeds =
[
  { origin: 'http://google.com', hash: 'a', created_at: moment(), expired_at: moment().add(1, 'days') },
  { origin: 'http://yandex.ru', hash: 'b', created_at: moment(), expired_at: moment().add(3, 'days') },
  { origin: 'http://vk.com', hash: 'c', created_at: moment(), expired_at: moment().add(5, 'days') },
  { origin: 'http://youtube.com', hash: 'd', created_at: moment(), expired_at: moment().add(10, 'days') },
  { origin: 'http://github.com', hash: 'e', created_at: moment(), expired_at: moment().add(15, 'days') }
]

exports.seed = function(knex, Promise)
{
  // Deletes ALL existing entries
  return knex('hashes').del()
  .then(() =>
  {
    // Inserts seed entries
    return knex('hashes')
    .insert(hash_seeds)
  })
}
