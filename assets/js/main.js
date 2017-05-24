// Validando telefono
	/*
function botonValid(){

	var boton = document.getElementById("botonValid").value; // Conectar el id del a en html que será el boton
	
	function validar(){
	*/

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