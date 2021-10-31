const express = require('express');

const app = express();
// app.use(bodyParser.json());

const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta-> ${PORT}`);
});
