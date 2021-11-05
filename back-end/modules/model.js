const connection = require('./mongoDBConnection');

const create = (data) =>
  connection().then((db) =>
    db
      .collection('Tasks')
      .insertOne({
        task: data.task,
        date: new Date(),
        status: "Pendente",
      })
      .then((result) => ({
        _id: result.insertedId,
        task: data.task,
        date: new Date(),
        status: "Pendente",
      }))
  );

const getAll = () =>
  connection().then((db) => db.collection('Tasks').find().toArray());

module.exports = { create, getAll };
