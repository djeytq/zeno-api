const router = require('express').Router();
const CadastrosRoutes = require('./cadastros.routes');

router.use('/cadastro', CadastrosRoutes);

module.exports = router