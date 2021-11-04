// Importadação das funções do toDoService para serem utilizadas no controller
const toDoService = require('../services/toDoService');

const commonError = 'Erro ao buscar os dados';

// Função de controle para buscar todas as tarefas
async function getAllTasks(_req, res) {
  try {
    const data = await toDoService.getAllTasks();
    return res.send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: commonError });
  }
}

// Função de controle para buscar todas as tarefas em ordem alfabética
async function getAllTasksAlphaSorted(_req, res) {
  try {
    const data = await toDoService.getAllTasksAlphaSorted();
    return res.send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: commonError });
  }
}

// Função de controle para buscar todas as tarefas mais recentes
async function getAllTasksDateSorted(_req, res) {
  try {
    const data = await toDoService.getAllTasksDateSorted();
    return res.send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: commonError });
  }
}

// Função de controle para criar uma tarefa
async function createTask(req, res) {
  try {
    const taskObj = req.body;
    const data = await toDoService.createTask(taskObj);
    return res.send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar os dados' });
  }
}
// Função de controle para editar uma tarefa
async function updateTask(req, res) {
  try {
    const taskObj = req.body;
    const data = await toDoService.updateTask(taskObj);
    return res.send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao editar os dados' });
  }
}
// Função de controle para deletar uma tarefa
async function deleteTask(req, res) {
  try {
    const taskObj = req.body;
    const data = await toDoService.deleteTask(taskObj);
    return res.send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro a deletar os dados' });
  }
}
  
module.exports = {
  getAllTasks,
  getAllTasksAlphaSorted,
  getAllTasksDateSorted,
  createTask,
  updateTask,
  deleteTask,
};
