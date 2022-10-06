module.exports = app => {
  const games = require("../controllers/gameCollection.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Bicycle
  // DECOMMENT:
  router.post("/", upload.single('file'), games.create);

  // Retrieve all games
  router.get("/", games.findAll);

  // Retrieve a single Bicycle with id
  router.get("/:id", games.findOne);

  // Update a Bicycle with id
  router.put("/:id", upload.single('file'), games.update);

  // Delete a Bicycle with id
  router.delete("/:id", games.delete);

  app.use("/api/gameCollection", router);
}