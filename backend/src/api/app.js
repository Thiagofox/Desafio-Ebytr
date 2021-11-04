// Importações das ferramentas necessárias

const express = require('express');
const bodyParser = require('body-parser');
// Cors para ligação Front + Back
const cors = require('cors');
const toDoRouter = require('../routes/toDoRouter');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rota principal da API
app.use('/todo', toDoRouter); 

module.exports = app;