// Configurações para o conexão da API

const PORT = process.env.PORT || 3000;
const app = require('./app');

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));