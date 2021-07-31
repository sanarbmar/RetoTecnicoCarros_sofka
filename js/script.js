



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
let distanciaCarrera = 500;
let distanciaPivot = 500;
let arrayCarros = [
    {
        id: car1,
        nombre: "pancho",
        auto : "mercedes benz",
        carril: 1,
        posicion: 0,
        avanza: function (_incPos) {
            this.posicion += _incPos
            car1.style.left = this.posicion + "px"
            console.log("NARANJA "+this.posicion);
            return this.posicion;
        }
    },
    {
        id: car2,
        nombre: "marlon",
        auto : "audi",
        carril: 2,
        posicion: 0,
        avanza: function (_incPos) {
            this.posicion += _incPos
            car2.style.left = this.posicion + "px"
            console.log("VERDE "+this.posicion);
            return this.posicion;
        }
    },
    {
        id: car3,
        nombre: "santiago",
        auto : "porche",
        carril: 3,
        posicion: 0,
        avanza: function (_incPos) {
            this.posicion += _incPos
            car3.style.left = this.posicion + "px"
            console.log("ROJO "+this.posicion);
            return this.posicion;
        }
    }
];
function realizar_carrera() {
    let max = 0;
    let tmpPos;
    for (let i = 0; i < 3; i++) {
        
        
    
    while (arrayCarros[i].posicion < distanciaCarrera) {
        for (let j = 0; j < 3; j++) {
            tmpPos = arrayCarros[j].avanza(Math.floor(Math.random() * 2) + 1);
            //max=(tmpPos<arrayCarros[max].posicion)?max:j;
            if (tmpPos < arrayCarros[max].posicion) {
                max;
            } else if (arrayCarros[j].posicion >= distanciaCarrera) {
                console.log(`felicidades ${arrayCarros[j].nombre}   GANASTE`);
                let ganador = arrayCarros[j].nombre;
            } else {
                j;
            }
           
        }

    }
    }
    //console.log(tmpPos);
}


iniciar.addEventListener("click", e => {
    realizar_carrera();
});



