const toDoModel = require('../models/toDoModel');

function validateTask(taskObj) {
  const { text, active, edit } = taskObj;
  if (!text || !active || !edit) {
    return { message: 'Dados Inválidos' };
  }
  return false;
}  

async function validateId(id) {
  const idValidate = await toDoModel.getTaskById(id);
  if (idValidate === null) {
    return { message: 'Id Invalido ou não encontrado' };
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

async function getTaskById(id) { 
  const idValid = await validateId(id);
  if (idValid.message) return idValid;
  const result = await toDoModel.getTaskById(id);
  return result;
}

async function updateTask(taskObj, id) {
  const entriesValid = validateTask(taskObj);
  const idValid = await validateId(id);
  if (entriesValid.message) return entriesValid;
  if (idValid.message) return idValid;
  const result = await toDoModel.updateTask(taskObj, id);
  return result;
}

async function deleteTask(id) {
  const idValid = await validateId(id);
  if (idValid.message) return idValid;
  const result = await toDoModel.deleteTask(id);
  return result;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};