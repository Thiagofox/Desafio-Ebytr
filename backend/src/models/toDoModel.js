const mongoConnection = require('./connection');

async function getAllTasks() {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').find().toArray();
  return data;
}

async function createTask(taskObj) {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').insertOne(taskObj);
  console.log(data);
  return data;
}

module.exports = {
  getAllTasks,
  createTask,
};