
exports.up = function(knex) {
    return knex.schema
    .createTable('url', (table) => {
    table.increments('id')
    table.string('original', 255).notNullable()
    table.string('short', 512).notNullable()
    table.integer('clicks')
    table.timestamps(true, true)
  })
  
};

exports.down = function(knex) {
  
};
