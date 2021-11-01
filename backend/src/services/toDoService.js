const toDoModel = require('../models/toDoModel');

function validateTask(taskObj) {
  console.log(taskObj);
  const { text, active, edit } = taskObj;
  if (!text || !active || !edit) {
    return { error: 'Dados Inválidos' };
  }
  return false;
}  

async function getAllTasks() {
  const data = toDoModel.getAllTasks();
  return data;
}

async function createTask(taskObj) {
  const validate = validateTask(taskObj);
  if (validate.error) {
    return validate;
  }
  const result = toDoModel.createTask(taskObj);
  return result;
}

module.exports = {
  getAllTasks,
  createTask,
};