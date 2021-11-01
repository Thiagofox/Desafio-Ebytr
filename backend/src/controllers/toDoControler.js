const toDoService = require('../services/toDoService');

async function getAllTasks(_req, res) {
  try {
    const data = await toDoService.getAllTasks();
    return res.send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao buscar os dados' });
  }
}

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

async function updateTask(req, res) {
  try {
    console.log('aqui');
    const taskObj = req.body;
    const data = await toDoService.updateTask(taskObj);
    return res.send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao editar os dados' });
  }
}

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
  createTask,
  updateTask,
  deleteTask,
};
