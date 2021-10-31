const mongoConnection = require('./connection');

async function getAllTasks() {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').find().toArray();
  return data;
}

async function createTasks(taskObj) {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').insertOne(taskObj);
  console.log(data);
  return data;
}

module.exports = {
  getAllTasks,
  createTasks,
};