//codigo rsponsavel por pegar criar as tabelas no banco de dados
const pool = require('../Database');
const tables = require('./tables');

async function Migration() {

    try {
        for (const t of tables) {
            await pool.query(t);
        }
        console.log('Banco de dados integrado com sucesso!')
    } catch (err) {
        console.log('Ocorreu um erro', err)
    }
}

module.exports = { Migration }