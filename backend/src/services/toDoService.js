// Importadação das funções do toDoModel para serem utilizadas no Service
const toDoModel = require('../models/toDoModel');

// Função de Serviço para buscar as tarefas
async function getAllTasks() {
  const data = toDoModel.getAllTasks();
  return data;
}

// Função de Serviço para buscar as tarefas em ordem alfabética
async function getAllTasksAlphaSorted() {
  const data = toDoModel.getAllTasksAlphaSorted();
  return data;
}

// Função de Serviço para buscar as tarefas mais recentes
async function getAllTasksDateSorted() {
  const data = toDoModel.getAllTasksDateSorted();
  return data;
}

// Função de Serviço para criar uma tarefa
async function createTask(taskObj) {
  const result = await toDoModel.createTask(taskObj);
  return result;
}

// Função de Serviço para editar uma tarefa
async function updateTask(taskObj) {
  const result = await toDoModel.updateTask(taskObj);
  return result;
}

// Função de Serviço para deletar uma tarefa
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