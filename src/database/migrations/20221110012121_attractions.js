/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('attractions', function(table){
        table.string('attraction_id').primary().notNullable();
        table.string('name').primary().notNullable();
        table.string('bio').primary().notNullable();
      });
    };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('attractions');
};
