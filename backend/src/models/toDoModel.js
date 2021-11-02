const mongoConnection = require('./connection');

async function getAllTasks() {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').find().toArray();
  return data;
}

async function getAllTasksAlphaSorted() {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').find().sort({ text: 1 }).toArray();
  return data;
}

async function getAllTasksDateSorted() {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').find().sort({ date: -1 }).toArray();
  return data;
}

async function createTask(taskObj) {
  const { text, active } = taskObj;
  const date = new Date();
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').insertOne({ text, active, date });
  return data;
}

async function updateTask(taskObj) {
  const { _id } = taskObj;
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').updateOne(
    { _id },
    { $set: taskObj },
    );
  return data;
}

async function deleteTask(taskObj) {
  const { _id } = taskObj;
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').deleteOne({ _id });
  return data;
}

module.exports = {
  getAllTasks,
  getAllTasksAlphaSorted,
  getAllTasksDateSorted,
  createTask,
  updateTask,
  deleteTask,
};