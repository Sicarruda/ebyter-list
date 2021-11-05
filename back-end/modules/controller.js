const service = require('./service');

const create = async (req, res) => {
  try {
    const task = await service.create(req.body);
    console.log('task', task);
    res.status(201).json(task);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ menssage: 'problema aqui: rota post' });
  }
};

const getAll = async (_req, res) => {
  try {
    const data = await service.getAll();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ menssage: 'problema aqui: rota get recipes' });
  }
};

module.exports = {
  create,
  getAll,
};
