// Validando telefono

function botonValid(){
	/*
	var boton = document.getElementById("botonValid").value; // Conectar el id del a en html que será el boton
	boton.addEventListener("click", validar);

	function validar(){
	*/

	var boton = document.getElementById("botonValid").value;
	var input = document.getElementById("input").value;

	var expresionRegular1 = /^([0-9]+){9}$/; // Telefono
	var expresionRegular2 = /\s/; // espacios en blanco

	if(boton === ""){
		alert("Debe ingresar su número télefonico");
	}else if (!boton.length.match(expresionRegular1)){
		alert("Debe ingresar 9 numeros");
	}else if(boton === boton.length.match(expresionRegular2)){
		alert("No dejes espacios en blanco");
	}
  
}

//match combinar o que calsa 