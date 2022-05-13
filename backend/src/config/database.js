const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

//Pool gera a conexão com o banco de dados
const pool = new Pool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.NAME,
  password: process.env.PASSWORD,
  port: 5432,
  max: 20, //Seta o máximo de pools na tabela SQL
  idleTimeoutMillis: 1000, // close idle clients after 1 second
  connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
  maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)

});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};