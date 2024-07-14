const ERROR_MESSAGES = require("../../constants/errorMessages");
const ItemService = require("../services/itemService");

exports.getAllItems = async (req, res, next) => {
  try {
    const items = await ItemService.getAllItems();
    res.send(items);
  } catch (error) {
    next(error);
  }
};

exports.getItem = async (req, res, next) => {
  try {
    const item = await ItemService.getItemById(req.params.id);
    res.send(item);
  } catch (error) {
    if (error.message === ERROR_MESSAGES.ITEM_NOT_FOUND) {
      res.status(404).json({ error: error.message });
    } else {
      next(error);
    }
  }
};

exports.createItem = async (req, res, next) => {
  try {
    const newItem = await ItemService.createItem(req.body);
    res.status(201).send(newItem);
  } catch (error) {
    if (error.message === ERROR_MESSAGES.CREATE_FAILED) {
      res.status(400).json({ error: error.message });
    } else {
      next(error);
    }
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const updatedItem = await ItemService.updateItem(req.params.id, req.body);
    res.send(updatedItem);
  } catch (error) {
    if (error.message === ERROR_MESSAGES.ITEM_NOT_FOUND) {
      res.status(404).json({ error: error.message });
    } else {
      next(error);
    }
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    await ItemService.deleteItem(req.params.id);
    res.status(204).send();
  } catch (error) {
    if (error.message === ERROR_MESSAGES.ITEM_NOT_FOUND) {
      res.status(404).json({ error: error.message });
    } else {
      next(error);
    }
  }
};
