const db = require("../models");
const Game = db.api;
const Op = db.Sequelize.Op;

// Create and Save a new Game
exports.create = (req, res) => {
  // Validate request
  if (!req.body.platform || !req.body.title || !req.body.genre){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Game
  const game = {
    platform: req.body.platform,
    title: req.body.title,
    description:req.body.description,
    genre:req.body.genre,
    meta_score:req.body.meta_score,
    user_score:req.body.user_score,
    release_date: req.body.release_date,
   filename: req.file ? req.file.filename : ""
  }

  // Save Game in the database
  Game.create(game).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Game"
    })
  });
};

// Retrieve all Games from the database.
exports.findAll = (req, res) => {
  Game.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Games"
    })
  })
};

// Find a single Bicycle with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Bicycle.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Manga with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Manga with id=" + id
      });
    });
}

// Update a Bicycle by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  console.log(req.body.file)
  console.log(req.body.filename)
  Bicycle.update({title: req.body.title, pages: req.body.pages, volume: req.body.volume, genre: req.body.genre, filename: req.body.filename}, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Manga was updated successfully."
        });
      } else {
      console.log("HE PASADO POR AQUI");
      console.log(num);
        res.send({
          message: `Cannot update Manga with id=${id}. Maybe Manga was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Manga with id=" + id
      });
    });
};

// Delete a Bicycle with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Bicycle.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Manga was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Manga with id=${id}. Maybe Manga was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Manga with id=" + id
      });
    });
};
