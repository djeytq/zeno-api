//funcoes para validar ou fazer verificacoes

function validateFields(first, last, _email, _phone) {
    let first_name = first.trim();
    let last_name = last.trim()
    let email = _email.trim();
    let phone = _phone;


    if (first_name.length < 2 || last_name.length < 2) {
        return {
            isBad: true,
            warn: "O nome deve ter pelo menos duas letras"
        };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { isBad: true, warn: "Formato de email invalido" }; //erro no formato
    }
    const phoneRegex = /^9\d{8}$/;
    if (!phoneRegex.test(phone)) {
        return { isBad: true, warn: "O formato do numero de telefone esta invalido, deve ter nove numero e comecar com 9" };
    }

    return { isBad: false, warn: "" };
}

module.exports = { validateFields };