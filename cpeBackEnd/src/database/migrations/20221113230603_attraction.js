/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('attraction', function(table){
        table.string('attraction_id').primary().notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
      });
    };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('attraction');
};