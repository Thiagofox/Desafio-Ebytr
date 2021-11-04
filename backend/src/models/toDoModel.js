// Importadação do connection que permite a utilização de funções do Mongo no código
const mongoConnection = require('./connection');

// Função que faz uma querry para o banco buscando as tarefas
async function getAllTasks() {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').find().toArray();
  return data;
}

// Função que faz uma querry para o banco buscando as tarefas em ordem alfabética
async function getAllTasksAlphaSorted() {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').find().sort({ text: 1 }).toArray();
  return data;
}

// Função que faz uma querry para o banco buscando as tarefas mais recentes
async function getAllTasksDateSorted() {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').find().sort({ date: -1 }).toArray();
  return data;
}

// Função que faz uma querry para o banco inserindo os dados no banco
async function createTask(taskObj) {
  const { text, active } = taskObj;
  const date = new Date();
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').insertOne({ text, active, date });
  return data;
}

// Função que faz uma querry para o banco editar os dados no banco
async function updateTask(taskObj) {
  const { _id } = taskObj;
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').updateOne(
    { _id },
    { $set: taskObj },
    );
  return data;
}

// Função que faz uma querry para o banco deletar os dados no banco
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