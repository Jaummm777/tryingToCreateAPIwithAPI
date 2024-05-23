const servicoTiny = require('../servicos/servicoTiny');

exports.obterContasPagar = async (req, res) => {
  try {
    const dados = await servicoTiny.get('/contas.pagar.pesquisa.php');
    res.json(dados);
  } catch (erro) {
    console.error('Erro ao buscar contas a pagar:', erro.message);
    res.status(500).json({ erro: erro.message });
  }
};

exports.obterContasReceber = async (req, res) => {
  try {
    const dados = await servicoTiny.get('/contas.receber.pesquisa.php');
    res.json(dados);
  } catch (erro) {
    console.error('Erro ao buscar contas a receber:', erro.message);
    res.status(500).json({ erro: erro.message });
  }
};