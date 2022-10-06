module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define("api", {
    platform: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    genre: {
      type: Sequelize.STRING
    },
    meta_score: {
      type: Sequelize.INTEGER
    },
    user_score: {
      type: Sequelize.INTEGER
    },
    release_date: {
      type:Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  return Game;
}