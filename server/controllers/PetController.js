const { Pets } = require("../models");

module.exports = {
  get: async (req, res) => {
    const pets = await Pets.findAll();
    res.json(pets);
  },
  create: async (req, res) => {
    const pet = req.body;
    res.json(pet);
    await Pets.create(pet);
  },
  update: async (req, res) => {
    const petId = req.params.id;
    const updatedData = req.body;
    res.json(updatedData);
    const existingPet = await Pets.findByPk(petId);
    await existingPet.update(updatedData);
  },
  delete: async (req, res) => {
    const petId = req.params.id;
    await Pets.destroy({ where: { id: petId } });
    res.json(Pets);
  },
};
