const express  = require('express');
const App = express();
require('dotenv').config()
const PORT = process.env.PORT;
App.use(express.json());

App.get('/', (req, res)=>{
    res.status(200).json({message: "Essa vaga é minha!"});
});

App.listen(PORT, (err)=>{
    if(err) return console.log('Ocorreu um errro', err);
    console.log(`API rodadndo na porta http://localhost:${PORTA}`);
});