const toDoModel = require('../models/toDoModel');

async function getAllTasks() {
  const data = toDoModel.getAllTasks();
  return data;
}

async function getAllTasksAlphaSorted() {
  const data = toDoModel.getAllTasksAlphaSorted();
  return data;
}

async function getAllTasksDateSorted() {
  const data = toDoModel.getAllTasksDateSorted();
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
  getAllTasksAlphaSorted,
  getAllTasksDateSorted,
  createTask,
  updateTask,
  deleteTask,
};