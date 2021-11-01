const express = require('express');
const bodyParser = require('body-parser');
const toDoRouter = require('../routes/toDoRouter');

const app = express();
app.use(bodyParser.json());

const PORT = 3001;

app.use('/todo', toDoRouter); 

app.listen(PORT, () => {
  console.log(`Ouvindo na porta-> ${PORT}`);
});
