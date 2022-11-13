/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("favoriteAtt", function(table){
        table.string("favoriteAtt_id").primary().notNullable();
        table.string("user_id").notNullable();
        table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
        table.string("attraction_id").notNullable();
        table.foreign("attraction_id").references("attraction_id").inTable("attraction").onDelete("cascade");
      });
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('favoriteAtt');
};