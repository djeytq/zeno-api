const express  = require('express');
const App = express();
require('dotenv').config();//habilitar variaveis de ambiente
const PORT = process.env.PORT || 3001;//caso nao jaha variavel de ambiemte pegue 3001
App.use(express.json());
const cors = require('cors');
const routes = require('./Routes');//importar as rotas
const { Migration } = require('./Migration'); //importando a migracao de base de dados

Migration();
App.use(cors());

App.get('/', (req, res)=>{
    res.status(200).json({message: "Essa vaga é minha!"});
});

App.use(routes)
App.listen(PORT, (err)=>{
    if(err) return console.log('Ocorreu um errro', err);
    console.log(`API rodadndo na porta http://localhost:${PORT}`);
});