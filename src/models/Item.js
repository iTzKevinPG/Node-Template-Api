const db = require("../config/database");

class Item {
  static async findAll() {
    const result = await db.query("SELECT * FROM items");
    return result.rows;
  }

  static async findById(id) {
    const result = await db.query("SELECT * FROM items WHERE id = $1", [id]);
    return result.rows[0];
  }

  static async create(newItem) {
    const result = await db.query("INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *", [
      newItem.name,
      newItem.description,
    ]);
    return result.rows[0];
  }

  static async update(id, updatedItem) {
    const result = await db.query("UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *", [
      updatedItem.name,
      updatedItem.description,
      id,
    ]);
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query("DELETE FROM items WHERE id = $1", [id]);
    return result.rowCount;
  }
}

module.exports = Item;
