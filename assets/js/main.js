// Validando telefono

	var boton = document.getElementById("botonValid");
	boton.addEventListener("click", function(){

	var input = document.getElementById("input").value;

	var expresionRegular1 = /^([0-9]+){9}$/; // Telefono

	if(input === ""){
		alert("Debe ingresar su número télefonico");
	}else if (input != expresionRegular1){
		alert("Debe ingresar 9 numeros");
	}
}); 

// Tablero cueck
//Defino el tablero
var botonStart = document.getElementById("start");




var tab = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]

//Ingreso el auto en la posicion 6,4
tablero[6][4] = "A";

//Obtengo el div en donde se dibujará el tablero
var divTab = document.getElementById("tabF");

//Variables temporales
var fila, casilla; // variables para el usuario

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tab.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tab[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tab[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTab.appendChild(fila);
}