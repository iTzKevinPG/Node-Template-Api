/**
 * Crea la tabla 'items' en la base de datos.
 *
 * @param { import("knex").Knex } knex - Instancia de Knex.
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("items", function (table) {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.text("description").nullable();
    table.timestamps(true, true);
  });
};

/**
 * Revierte la creación de la tabla 'items'.
 *
 * @param { import("knex").Knex } knex - Instancia de Knex.
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("items");
};
