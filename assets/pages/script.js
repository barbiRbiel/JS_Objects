//OBJECTS: Game: Piedra, papel, tijera.
function Objeto(data){
    this.tipo = data.tipo;
    this.mata = data.mata;
}

const objetoPiedra ={
    tipo: "Piedra",
    mata: "A tijera",
};
const objetoPapel ={
    tipo: "Papel",
    mata: "A piedra",
};
const objetoTijera ={
    tipo: "Tijera",
    mata: "A papel",
};

const objeto1 = new Objeto(objetoPiedra);
const objeto2 = new Objeto(objetoPapel);
const objeto3 = new Objeto(objetoTijera);

console.log(objeto1, objeto2, objeto3);