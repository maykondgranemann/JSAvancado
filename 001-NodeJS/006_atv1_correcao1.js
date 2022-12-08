function saudacao(nome){
    return `Olá, ${nome}`;
}

function nome_completo(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}

function resto(n1, n2){ // POO responsabilidade unica
    resultado = n1 % n2;
    return resultado;
}

module.exports = {
    saudacao, 
    nome_completo, 
    resto
}