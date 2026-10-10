/*Ejercicio 1

let vida = 100;
let LimSup = 50;
let LimInf = 0;
let Pociones = 3;

let ciclo = setInterval(() => {
    vida -= 5;
    console.log("Tienes "+ vida +" de vida.");
    
    if (vida < LimSup && Pociones > 0 && vida > LimInf) {
        vida += 30;
        Pociones -= 1;
        console.log("Te quedan "+Pociones+" pociones.");
    }

    if (vida === LimInf){
        clearInterval(ciclo);
        console.log("Has muerto.");
    }
},
2000);*/



/*Ejercicio 2

let Inventario = [
    {
        name: "Bloque de Tierra",
        tipo: "Construccion",
        cantidad: 64
    },
    {
        name: "Espada de Diamante",
        tipo: "Combate",
        cantidad: 1
    },
    {
        name: "Piedra",
        tipo: "Construccion",
        cantidad: 52
    },
    {
        name: "Manzana Dorada",
        tipo: "Alimentacion",
        cantidad: 16
    },
    {
        name: "Bloque de Madera de Abedul",
        tipo: "Construccion",
        cantidad: 48
    },
    {
        name: "Flecha",
        tipo: "Combate",
        cantidad: 6
    },
    {
        name: "Zanahoria",
        tipo: "Alimentacion",
        cantidad: 20
    },
];

function OrdenInv(tipo) {
    let tipo_Construccion = Inventario.filter((Type) => Type.tipo === "Construccion");
    let OrdenCon = tipo_Construccion.toSorted((a, b) => b.cantidad - a.cantidad);
    console.log("Tipo: Construccion", OrdenCon);

    let tipo_Alimentacion = Inventario.filter((Type) => Type.tipo === "Alimentacion");
    let OrdenAli = tipo_Alimentacion.toSorted((a, b) => b.cantidad - a.cantidad);
    console.log("Tipo: Alimentacion", OrdenAli);

    let tipo_Combate = Inventario.filter((Type) => Type.tipo === "Combate");
    let OrdenCom = tipo_Combate.toSorted((a, b) => b.cantidad - a.cantidad);
    console.log("Tipo: Combate", OrdenCom);
}

OrdenInv();*/



/*Ejercicio 3*/

const Greninja = {
    nombre: "Greninja",
    tipo: "Agua",
    ataque: "Shuriken de agua",
    dano: 95,
    vida: 72,
    defensa: 70
};

const Lucario = {
    nombre: "Lucario",
    tipo: "Lucha",
    ataque: "Esfera Aural",
    dano: 110,
    vida: 70,
    defensa: 67
};


function Atacar(atacante, defensor) {
    let Damage = Math.max(0, atacante.dano - defensor.defensa);
    defensor.vida = Math.max(0, defensor.vida - Damage);

    console.log(`${atacante.nombre} usa ${atacante.ataque} y hace ${Damage} de daño.`);
    console.log(`${defensor.nombre} queda con ${defensor.vida} de vida.`);

    return defensor.vida;
}

function Combate(p1, p2) {
    let turno = 1;

    while (p1.vida > 0 && p2.vida > 0) {
        console.log(`--- Turno ${turno} ---`);

        Atacar(p1, p2);
        if (p2.vida === 0) {
            console.log(`${p2.nombre} se ha debilitado. ¡${p1.nombre} gana!`);
            break;
        }

        Atacar(p2, p1);
        if (p1.vida === 0) {
            console.log(`${p1.nombre} se ha debilitado. ¡${p2.nombre} gana el combate!`);
            break;
        }

        turno++;
    }
}

Combate(Greninja, Lucario);