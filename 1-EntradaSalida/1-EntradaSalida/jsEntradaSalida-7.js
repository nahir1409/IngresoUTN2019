/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
    var num2;
    var resultado;


   num1 = document.getElementById("numeroUno").value;

   num1 = parseInt(num1);

   num2 = document.getElementById("numeroDos").value;

   num2 = parseInt(num2);

   resultado = (num1 + num2);

   alert("La suma es: " + resultado);
}

function restar()
{
    var num3;
    var num4;
    var resultado;


   num3 = document.getElementById("numeroUno").value;

   num3 = parseInt(num3);

   num4 = document.getElementById("numeroDos").value;

   num4 = parseInt(num4);

   resultado = (num3 - num4);

   alert("La resta es: " + resultado);
}

function multiplicar()
{ 
    var num5;
    var num6;
    var resultado;


   num5 = document.getElementById("numeroUno").value;

   num5 = parseInt(num5);

   num6 = document.getElementById("numeroDos").value;

   num6 = parseInt(num6);

   resultado = (num5 * num6);

   alert("La multiplicación es: " + resultado);
}

function dividir()
{
	var num7;
    var num8;
    var resultado;


   num7 = document.getElementById("numeroUno").value;

   num7 = parseInt(num7);

   num8 = document.getElementById("numeroDos").value;

   num8 = parseInt(num8);

   resultado = (num7 / num8);

   alert("La división es: " + resultado);
}

