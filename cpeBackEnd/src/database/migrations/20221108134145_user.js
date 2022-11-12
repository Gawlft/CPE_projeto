/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table){
    table.string('user_id').primary().notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.datetime('birthdate').notNullable();
    table.string('address').notNullable();
    table.string('description').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
