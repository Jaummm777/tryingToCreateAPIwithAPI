const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.tiny.com.br/api2',
  headers: {
    'Content-Type': 'application/json'
  }
});

const get = async (endpoint, params = {}) => {
  params.token = process.env.TINY_API_TOKEN;
  params.formato = 'json';
  console.log('Params:', params); // Verifique os parâmetros
  try {
    const resposta = await api.get(endpoint, { params });
    if (resposta.data.retorno.erros) {
      throw new Error(resposta.data.retorno.erros[0].erro);
    }
    return resposta.data.retorno;
  } catch (erro) {
    throw new Error(erro.response ? erro.response.data : erro.message);
  }
};

module.exports = { get };