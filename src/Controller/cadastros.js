
class Cadastros{

    static async Register(req, res){

        try{
            res.status(200).json({message: "Cadastrado com sucesso"})
        }catch(err){
            res.status(500).json({message: "Erro ao cadastrar, tente mais tarde!"})
        }
    }
    static async Show(req, res){

        try{

        }catch(err){
            res.status(500).json({message: "Erro ao exibir, tente mais tarde!"})
        }
    }
    static async Update(req, res){

        try{

        }catch(err){
            res.status(500).json({message: "Erro ao atualizar, tente mais tarde!"})
        }
    }
    static async Delete(req, res){

        try{

        }catch(err){
            res.status(500).json({message: "Erro ao deletar, tente mais tarde!"})
        }
    }
}

module.exports = Cadastros;