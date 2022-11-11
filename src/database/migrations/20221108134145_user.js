/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table){
    table.string('user_id').primary().notNullable();
    table.string('name').primary().notNullable();
    table.string('email').primary().notNullable();
    table.datetime('birthdate').primary().notNullable();
    table.string('address').primary().notNullable();
    table.string('description').primary().notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
