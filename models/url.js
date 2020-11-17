const knex = require('../database/connection');


exports.create = (url) => {
  return knex('url')
    .insert({
      original: url.original,
      short: url.short,
      clicks: url.clicks,
    });
}

exports.findByShortUrl = (short) => {
    return knex('url')
    .where({short:short})
}

exports.findAll = () =>{
    return knex('url') 
}

exports.update = () =>{
    return knex('url') .update ()
}