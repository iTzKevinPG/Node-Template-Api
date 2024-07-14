const express = require("express");
const itemRoutes = express.Router();
const itemController = require("../api/controllers/itemController");

itemRoutes.get("/", itemController.getAllItems);
itemRoutes.get("/:id", itemController.getItem);
itemRoutes.post("/", itemController.createItem);
itemRoutes.put("/:id", itemController.updateItem);
itemRoutes.delete("/:id", itemController.deleteItem);

module.exports = itemRoutes;
