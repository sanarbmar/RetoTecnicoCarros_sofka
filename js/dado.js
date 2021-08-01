let x=0;//contador
let dadoNumero = document.getElementById("dadoNumero");
let dadot = document.getElementById("dadot");
/**funcion para tirar el dado , escogiendo un numero aleatorio entre 1-6 */
function rollDice(){
    let tiroDado = document.getElementById("tiroDado");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = (d1*100)/5;
    dadoNumero.innerHTML = d1;
    tiro.innerHTML = "Numero de tiros "+x+".";
    tiroDado.innerHTML = "tu numero de METROS recorridos en el lanzamiento  es "+d2+".";
    x = x+1;
   return d1;
}
dadot.addEventListener("click", e => {
    rollDice();
});



