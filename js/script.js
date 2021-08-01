const car1 = document.getElementById("car1");
const car2 = document.getElementById("car2");
const car3 = document.getElementById("car3");
const iniciar = document.getElementById("iniciar");
/**LA DISTANCIA SE MIDE EN 600PX */
let distanciaCarrera = 600;
class Carro {
    constructor(id, nombre, auto, carril,posicion,llegada,carName) {
        this.id = id;
        this.nombre = nombre;
        this.auto = auto;
        this.carril = carril;
        this.posicion = posicion;
        this.llegada = llegada;
        this.carName = carName;
    }
    /**Metodo para avanar incrementando la posicion */
    avanza(_incPos) {
        const car3 = document.getElementById(this.carName);
        this.posicion += _incPos
        car3.style.left = this.posicion + "px"
        return this.posicion;
    }
}
/**guarda mis objetos de la clase Carro */
let arrayCarros = [
    new Carro(car1,"pacho","mercedez benz",1,0,0,"car1"),
    new Carro(car2,"sebastian","audi",1,0,0,"car2"),
    new Carro(car3,"ana","mazda",1,0,0,"car3")
];
/**Funcion para que el carro valla mas lento  */
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**tmPos es la poscision temporal del carro , con la funcion realizar carrera asignamos aleatoriamente el carroque va a correr y la distancia que va a recorrer */
async function realizar_carrera() {
    /**posicion temporal */
    let tmpPos = 1;
    let carreraTerminada = false;
    while (carreraTerminada == false) {
        await sleep(1000);
        /**el every es para validar que todos los elementos del array cumplan la condicion de carrera terminada */
        carreraTerminada = arrayCarros.every(x => x.posicion >= distanciaCarrera);
        /**se repite la cantidad de veces segun los carros que hay */
        for (let i = 0; i < arrayCarros.length; i++) {
            if (arrayCarros[i].posicion >= distanciaCarrera && arrayCarros[i].llegada == 0) {
                /**la pista tiene 600 px , cada pixel son 5 metros para una pista de 3km */
                arrayCarros[i].llegada = tmpPos;//cuando la llegada sea cero se saca el primer ganador
                console.log(`el carro  ${arrayCarros[i].auto} , quedo en la posicion ${tmpPos} `);
                tmpPos = tmpPos + 1;
            }
            if (arrayCarros[i].posicion < distanciaCarrera) {
                /**el numero que me de aleatoriamente de 1 a 6 el dado ,lo divido por 5 para que me de la distancia en metros */
                arrayCarros[i].avanza(((rollDice()) * 100) / 5);
            }
        }
    }
}
iniciar.addEventListener("click", e => {
    realizar_carrera();
});

