const model = require('./model');

const create = (data) => {
  return model.create(data);
};

const getAll = async () => {
  return model.getAll();
};

module.exports = { create, getAll };
