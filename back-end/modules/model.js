const connection = require('./mongoDBConnection');

const create = (data) =>
  connection().then((db) =>
    db
      .collection('Tasks')
      .insertOne({ task, date, status })
      .then((result) => ({
        _id: result.insertedId,
        task,
        date,
        status,
      }))
  );

module.exports = { create };
