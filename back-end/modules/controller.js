const service = require("./service");

const create = async (req, res) => {
  try {
    const task = await service.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ menssage: 'problema aqui: rota post' });
  }
};

module.exports = {
  create,
};
