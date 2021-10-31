const toDoService = require('../services/toDoService');

async function getAllTasks(_req, res) {
  try {
    const data = await toDoService.getAllTasks();
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados' });
  }
}

async function createTask(req, res) {
  try {
    const { taskObj } = req.body;
    await toDoService.createTask(taskObj);
    return res.status(201).json({ message: 'criado com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados' });
  }
}
  
module.exports = {
  getAllTasks,
  createTask,
};
