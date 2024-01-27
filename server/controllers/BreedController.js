const { Breeds } = require("../models");

module.exports = {
  get: async (req, res) => {
    const breeds = await Breeds.findAll();
    res.json(breeds);
  },
  create: async (req, res) => {
    const breed = req.body;
    res.json(breed);
    await Breeds.create(breed);
  },
  update: async (req, res) => {
    const breedId = req.params.id;
    const updatedData = req.body;
    res.json(updatedData);
    const existingBreed = await Breeds.findByPk(breedId);
    await existingBreed.update(updatedData);
  },
  delete: async (req, res) => {
    const breedId = req.params.id;
    await Breeds.destroy({ where: { id: breedId } });
    res.json(Breeds);
  },
};
