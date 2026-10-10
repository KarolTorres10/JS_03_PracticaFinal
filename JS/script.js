/*Ejercicio 1*/
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
2000);


/*Ejercicio 2*/



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