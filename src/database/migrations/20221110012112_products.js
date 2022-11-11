/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.string('product_id').primary().notNullable();
        table.string('user_id').notNullable();
        table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
        table.string('name').notNullable();
        table.string('description').notNullable();
      });
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('products');
};