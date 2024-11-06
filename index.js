class Heroi{
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  };

  ataque(){
    if(this.tipo === "mago"){
      return "magia";
    };
    if(this.tipo === "guerreiro"){
      return "espada"; 
    }; 
    if(this.tipo === "monge"){
      return "artes marciais";
    };
    if(this.tipo === "ninja"){
      return "shuriken";
    };  
  };
}

const mago = new Heroi("Hodin", 125, "mago");

console.log(`O ${mago.tipo} atacou usando ${mago.ataque()}`);