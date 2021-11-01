const toDoModel = require('../models/toDoModel');

async function getAllTasks() {
  const data = toDoModel.getAllTasks();
  return data;
}

async function createTask(taskObj) {
  const result = await toDoModel.createTask(taskObj);
  return result;
}

async function updateTask(taskObj) {
  const result = await toDoModel.updateTask(taskObj);
  return result;
}

async function deleteTask(taskObj) {
  const result = await toDoModel.deleteTask(taskObj);
  return result;
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};