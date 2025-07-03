import { cp } from "fs";

export class User {
    constructor(nome, cpf, email) {

        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }
}

export class Endereco {
    constructor (cep, numero, complemento){

        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;


    }
}


