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



/*Ejercicio 2*/

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

OrdenInv();



/*Ejercicio 3

const Greninja = [
    {
        nombre: "Greninja",
        tipo: "Agua",
        ataque: "Shuriken de agua",
        dano: 95,
        vida: 72,
        defensa: 70
    },
];

const Lucario = [
    {
        nombre: "Lucario",
        tipo: "Lucha",
        ataque: "Esfera Aural",
        dano: 110,
        vida: 70,
        defensa: 67
    },
];*/

/*
function GreninjaAtaque(Greninja, Lucario) {
    let Dano = Greninja.ataque - Lucario.defensa;
    Lucario.vida = Lucario.vida - Dano;

    return Lucario.vida;
}
}*/


function LucarioAtaque(Greninja, Lucario) {
    let vidaRestante = Greninja.vida -= (Lucario.dano - Greninja.defensa);
    console.log(`Lucario usa Esfera Aural. La vida restante de Greninja es: ${vidaRestante}`);
}