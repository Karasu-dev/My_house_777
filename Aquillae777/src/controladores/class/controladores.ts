import {Dados} from "./dados"; 

 export  class pessoas{
    name: string;
    sobrenome: string;
    idade: number ;
    profissao: string ;

    constructor(name: string, sobrenome: string, idade:number,  profissao: Text){
        this.name;
        this.sobrenome;
        this.idade;
        this.profissao;
    }

 
    getPessoas = () => {
        return this.name + this.sobrenome + this.idade + this.profissao;
    }
}



