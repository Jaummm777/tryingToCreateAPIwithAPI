const express = require('express');
const router = express.Router();
const servicoTiny = require('../servicos/servicoTiny');

router.get('/contas-pagar', async (req, res) => {
  try {
    const resposta = await servicoTiny.get('/contas.pagar.pesquisa.php', { data_ini_vencimento: '01/01/2024' });
    res.json(resposta);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

module.exports = router;