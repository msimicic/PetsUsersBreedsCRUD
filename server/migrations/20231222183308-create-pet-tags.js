"use strict";

//NAPOMENA: Many to many tablica kreirana u mnozini jer u suprotnom sequelize kreira duplu tablicu

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pet_Tags", {
      pet_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: "pets", key: "id" },
      },
      tag_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: "tags", key: "id" },
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pet_Tags");
  },
};
