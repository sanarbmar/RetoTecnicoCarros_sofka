



/* ------------------------------------------------------------------------------*/
/* const movDer = document.getElementById("movDer"); */

/* function moverDerecha(d2){
    var car1=document.getElementById('car1');
    var movimiento=setTimeout(function(){
        if(d2 > 0){
            clearTimeout(movimiento);
            car1.style.left=d2+"px";
        }
        
    },1000); */

/* function (){
    if(x>100){
    clearTimeout(movimiento);
    console.log(x)
    }
    car1.style.left=x+"px";
x++;},5000); */

/* }  */

/* function registerClickEvent(btn) {
    btn.addEventListener("click", e => {
        console.log("Clicked");
        
        
    });
}
function registerClickEvents() {
    document.querySelectorAll("button").forEach(button => {
        registerClickEvent(button);
        console.log(button);
    });
} */


/* var die1 = document.getElementById("die1");
var tiroDado = document.getElementById("tiroDado");
var xcontador=1;
var y=0;
let status = document.getElementById("status");
let d1 = Math.floor(Math.random() * 6) + 1;
let d2 = ((d1 *100)*30)/100;
let d3 = d1 *100;
let pos =d1 + y;
let pos2 = pos*100;
function rollDice(){
    
    die1.innerHTML = d1;
    status.innerHTML = "Tu posicion "+ pos2 +".";
    tiro.innerHTML = "Tu numero de tiro es "+xcontador+".";
    tiroDado.innerHTML = "tu numero de pixeles es "+d2+".";
    xcontador = xcontador+1;
    y = pos;
    if (pos2 >= 2000){
        alert("EL juego ha terminado");
        y = 0;

    }
    registerClickEvents();
    moverDerecha(d2)
} */
/**----------------------------------------------------------------------------------------------------------------- */
//seleccionar imágenes
/* var coche1 = document.getElementById("car1");
var coche2 = document.getElementById("car2");

//posiciones iniciales
var x_coche1 = 0;
var x_coche2 = 0;
function correr() {
       //movimiento coche1
 if (x_coche1 <= 600 && x_coche1 >= 0) { //condición para que se mueva entre estos valores de la pantalla
  x_coche1 = x_coche1 + 1; //movimiento del valor x
  console.log(x_coche1);
  coche1.style.left = x_coche1 + "px"; //aplicar el valor obtenido al left del elemento
  
  }
 

  //movimiento coche2
      if (x_coche2 <= 600 && x_coche2 >= 0) { //condición para que se mueva entre estos valores de la pantalla
   x_coche2 = x_coche2 + 1; //movimiento del valor x
   coche2.style.left = x_coche2 + "px"; //aplicar el valor obtenido al left del elemento
  }
} */
/**---------------------------------------------------------------------------------------------------------------- */

const car1 = document.getElementById("car1");
const car2 = document.getElementById("car2");
const car3 = document.getElementById("car3");
const jugar = document.getElementById("jugar");
const iniciar = document.getElementById("iniciar");
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
    avanza(_incPos) {
        const car3 = document.getElementById(this.carName);
        this.posicion += _incPos
        car3.style.left = this.posicion + "px"
        return this.posicion;
    }
}
let arrayCarros = [
    new Carro(car1,"pacho","mercedez benz",1,0,0,"car1"),
    new Carro(car2,"sebastian","audi",1,0,0,"car2"),
    new Carro(car3,"ana","mazda",1,0,0,"car3")
    /* {
        id: car1,
        nombre: "pancho",
        auto: "mercedes benz",
        carril: 1,
        posicion: 0,
        llegada: 0,
        avanza: function (_incPos) {
            this.posicion += _incPos
            car1.style.left = this.posicion + "px"
            console.log("NARANJA " + this.posicion);
            return this.posicion;
        }
    },
    {
        id: car2,
        nombre: "marlon",
        auto: "audi",
        carril: 2,
        posicion: 0,
        llegada: 0,
        avanza: function (_incPos) {
            this.posicion += _incPos
            car2.style.left = this.posicion + "px"
            console.log("VERDE " + this.posicion);
            return this.posicion;
        }
    },
    {
        id: car3,
        nombre: "santiago",
        auto: "porche",
        carril: 3,
        posicion: 0,
        llegada: 0,
        avanza: function (_incPos) {
            this.posicion += _incPos
            car3.style.left = this.posicion + "px"
            console.log("ROJO " + this.posicion);
            return this.posicion;
        }
    } */
];

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function realizar_carrera() {
    let max = 0;
    let tmpPos = 1;
    let carreraTerminada = false;
    while (carreraTerminada == false) {
        await sleep(10);
        carreraTerminada = arrayCarros.every(x => x.posicion >= distanciaCarrera)
        for (let i = 0; i < 3; i++) {
            if (arrayCarros[i].posicion >= distanciaCarrera && arrayCarros[i].llegada == 0) {
                /**la pista tiene 600 px , cada pixel son 5 metros para una pista de 3km */
                arrayCarros[i].llegada = tmpPos;
                //max=(tmpPos<arrayCarros[max].posicion)?max:j;
                console.log(`el carro  ${arrayCarros[i].auto} , quedo en la posicion ${tmpPos} `)
                almacenarEnArchivo(`el carro  ${arrayCarros[i].auto} , quedo en la posicion ${tmpPos} `)
                tmpPos = tmpPos + 1;
            }
            if (arrayCarros[i].posicion < distanciaCarrera) {
                arrayCarros[i].avanza((rollDice() * 100) / 5);
            }
            /**el every es paravalidar qu todos los elementos del array cumplan la condicion */

        }
    }
    //console.log(tmpPos);
}
/* import fs from 'fs';
var logger = fs.createWriteStream('log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

function almacenarEnArchivo(registro) {
    logger.write(registro) // append string to your file
}
almacenarEnArchivo() */

iniciar.addEventListener("click", e => {
    realizar_carrera();
});



