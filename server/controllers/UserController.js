const { Users } = require("../models");

module.exports = {
  get: async (req, res) => {
    const users = await Users.findAll();
    res.json(users);
  },
  create: async (req, res) => {
    const user = req.body;
    res.json(user);
    await Users.create(user);
  },
  update: async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    res.json(updatedData);
    const existingUser = await Users.findByPk(userId);
    await existingUser.update(updatedData);
  },
  delete: async (req, res) => {
    const userId = req.params.id;
    await Users.destroy({ where: { id: userId } });
    res.json(Users);
  },
};
