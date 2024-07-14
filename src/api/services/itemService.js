const ERROR_MESSAGES = require("../../constants/errorMessages");
const Item = require("../../models/Item");

class ItemService {
  static async getAllItems() {
    return await Item.findAll();
  }

  static async getItemById(id) {
    const item = await Item.findById(id);
    if (!item) {
      throw new Error(ERROR_MESSAGES.ITEM_NOT_FOUND);
    }
    return item;
  }

  static async createItem(data) {
    const item = await Item.create(data);
    if (!item) {
      throw new Error(ERROR_MESSAGES.CREATE_FAILED);
    }
    return item;
  }

  static async updateItem(id, data) {
    const item = await Item.update(id, data);
    if (!item) {
      throw new Error(ERROR_MESSAGES.ITEM_NOT_FOUND);
    }
    return item;
  }

  static async deleteItem(id) {
    const result = await Item.delete(id);
    if (result === 0) {
      throw new Error(ERROR_MESSAGES.ITEM_NOT_FOUND);
    }
    return result;
  }
}

module.exports = ItemService;
