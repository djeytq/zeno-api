//crud completo capsulado dentro da classe-Cadastros
const pool = require('../Database');
const {validateFields} = require('../helper/validations')

class Cadastros {

    static async Register(req, res) {///resgistrar cadastro

        try {
            const { first_name, last_name, email, phone, description } = req.body; //capturar os dados da requisicao
            if (!first_name || !last_name | !email) {//verifica campos obrigatorios
                return res.status(400).json({ message: "Preencha tods os campos obtigatórios" });
            }
            const {isBad, warn} = validateFields(first_name, last_name, email, phone);
            if(isBad){
                return res.status(400).json({ message: warn });
            }
            const query = `INSERT INTO cadastros
            (first_name, last_name, email, phone, description)
            VALUES($1, $2, $3, $4, $5)`; // query ja preparda para evitar sql injection

            await pool.query(query, [first_name, last_name, email, phone, description]);
            res.status(201).json({ message: "Cadastrado com sucesso" });
        } catch (err) {
            console.log('Ocorreu um erro', err)
            res.status(500).json({ message: "Erro ao cadastrar, tente mais tarde!" });
        }
    }
    static async Show(req, res) {//exibir cadastros

        try {
            const { id } = req.query;

            let query = "SELECT *FROM cadastros "
            //caso haja um id, acescenta isso na quey- query dinamica
            if (id) {
                query += ' WHERE id = $1';
            } else {
                query += ' ORDER BY first_name DESC';
            }
            const result = await pool.query(query, [id]);

            if (result.rows.length > 0) {
                res.status(200).json(result.rows);
            } else {
                res.status(404).json({ message: "Cadastro inexistente!" })
            }
        } catch (err) {
            console.log('Ocorreu um erro', err)
            res.status(500).json({ message: "Erro ao exibir, tente mais tarde!" })
        }
    }
    static async Update(req, res) {//atualizar o cadastro

        try {
            const { first_name, last_name, email, phone, description } = req.body; //capturar os dados da requisicao
            const { id } = req.params;//pegar o id o cadstro seleciondo

            if (!first_name || !last_name | !email) {//verifica campos obrigatorios
                return res.status(400).json({ message: "Preencha tods os campos obtigatórios" });
            }
            const {isBad, warn} = validateFields(first_name, last_name, email, phone);
            if(isBad){
                return res.status(400).json({ message: warn });
            }

            const query = `UPDATE cadastros SET 
            first_name = $1, last_name = $2, email = $3, phone = $4, description = $5, updated_at = CURRENT_DATE WHERE id = $6 RETURNING id;`

            const {rows} = await pool.query(query, [first_name, last_name, email, phone, description, id]);
            if(rows[0]?.id){//caso tiver retornado id, significa que haviia um cadastro com este id
                res.status(200).json({ message: "Cadastro atualizado com sucesso!" })
            }else{//caso nao, entao nao exisia nenhum cadastro com esse id
                res.status(404).json({ message: "Cadastro inexistente!" })
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Erro ao atualizar, tente mais tarde!" })
        }
    }
    static async Delete(req, res) {//metodo para deletar cadastro

        try {
            const { id } = req.params;//pegar o id o cadstro seleciondo
            if (!id) {
                res.status(400).json({ messge: "Deves selecionar um usuário" })
            }
            const result = await pool.query("DELETE FROM cadastros WHERE id = $1 RETURNING id", [id]);
            if(result.rows[0]?.id){//caso tiver retornado id, significa que haviia um cadastro com este id
                res.status(200).json({ message: "Cadastro apagado com sucesso!" })
            }else{//caso nao, entao nao exisia nenhum cadastro com esse id
                res.status(404).json({ message: "Cadastro inexistente!" })
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Erro ao deletar, tente mais tarde!" })
        }
    }
}

module.exports = Cadastros;