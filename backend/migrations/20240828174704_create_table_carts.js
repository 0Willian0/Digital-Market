
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('carts', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').unique();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('carts')
};
