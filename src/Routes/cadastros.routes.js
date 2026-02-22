const router = require('express').Router();
const CadastrosController = require('../Controller/cadastros');

router.post('/register', CadastrosController.Register);
router.get('/show', CadastrosController.Show);
router.put('/update/:id', CadastrosController.Update);
router.delete('/delete/:id', CadastrosController.Delete);

module.exports = router;
