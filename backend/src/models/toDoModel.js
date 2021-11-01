const mongoConnection = require('./connection');

async function getAllTasks() {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').find().toArray();
  return data;
}

async function createTask(taskObj) {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').insertOne(taskObj);
  return data;
}

async function updateTask(taskObj) {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').updateOne(
    { _id: taskObj._id},
    { $set: taskObj },
    );
  return data;
}

async function deleteTask(taskObj) {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').deleteOne({ _id: taskObj._id });
  return data;
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};