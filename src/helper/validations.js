//funcoes para validar ou fazer verificacoes

function validateFields(first_name, last_name, email, phone){
    let first_name = first_name.trim();
    let last_name = last_name.trim()
    let email = email.trim();
    let phone = phone;

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    if(nameRegex.test(first_name) && nameRegex.test(last_name)){
        return {isGood: true, warn: "O nome deve ter pelo menos uma letra e sem caracteres especiais"}; //se a condicao nao satisfaz, vai retorna tru para indicar erro
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return {isBad: true, warn: "Formato de email invalido"}; //erro no formato
    }
    const phoneRegex = /^9\d{8}$/;
    if(!phoneRegex.test(phone)){
        return {isBad: true, warn: "O formato do numero de telefone esta invalido, deve ter nove numero e comecar com 9"};
    }
    
    return {isBad: false, warn: ""};
}

module.exports = {validateFields};