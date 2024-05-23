require('dotenv').config();
const express = require('express');
const app = express();
const rotasFinanceiras = require('./rotas/rotasFinanceiras');

console.log('Token:', process.env.TINY_API_TOKEN);

app.use(express.json());
app.use('/api/financeiro', rotasFinanceiras);

const PORTA = process.env.PORTA || 3000;
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
