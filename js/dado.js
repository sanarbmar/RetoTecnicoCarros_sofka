var x=1;
var y=0;
let dadoNumero = document.getElementById("dadoNumero");
let dadot = document.getElementById("dadot");
function rollDice(){
   
    var status = document.getElementById("status");
    var tiroDado = document.getElementById("tiroDado");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = ((d1 *100)*30)/100;
    var pos =d1 + y;
    dadoNumero.innerHTML = d1;
    status.innerHTML = "Tu posicion "+ pos +".";
    tiro.innerHTML = "Tu numero de tiro es "+x+".";
    tiroDado.innerHTML = "tu numero de PIXELES es "+d2+".";
    x = x+1;
    y = pos;
    if (pos >= 20){
    	alert("EL juego ha terminado");
    	y = 0;

    }
   
}
dadot.addEventListener("click", e => {
    rollDice();
})
/* function ejm(){
    
} */


