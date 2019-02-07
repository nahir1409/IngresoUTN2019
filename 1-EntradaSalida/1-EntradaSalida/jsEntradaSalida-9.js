/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var nuevoSueldo;
    var resultado;
    

    sueldo = document.getElementById("sueldo").value;
    
    resultado = parseInt(sueldo)*10 / 100;

    document.getElementById("resultado").value=resultado;



    alert("Su nuevo sueldo es de: " + nuevoSueldo)




	
}
