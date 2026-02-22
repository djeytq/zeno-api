const express  = require('express');
const App = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
App.use(express.json());
const cors = require('cors');
const routes = require('./Routes')

App.use(cors());

App.get('/', (req, res)=>{
    res.status(200).json({message: "Essa vaga é minha!"});
});

App.use(routes)
App.listen(PORT, (err)=>{
    if(err) return console.log('Ocorreu um errro', err);
    console.log(`API rodadndo na porta http://localhost:${PORT}`);
});