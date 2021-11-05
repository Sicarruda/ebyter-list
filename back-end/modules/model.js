const connection = require('./mongoDBConnection');

const create = (data) =>
  connection().then((db) =>
    db
      .collection('Tasks')
      .insertOne({
        task: data.task,
        date: new Date('dd/mm/aaaa'),
        status: data.status,
      })
      .then((result) => ({
        _id: result.insertedId,
        task: data.task,
        date: data.date,
        status: data.status,
      }))
  );

const getAll = () =>
  connection().then((db) => db.collection('Tasks').find().toArray());

module.exports = { create, getAll };
