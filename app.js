// Ejercicio 1

function holaMundo() {
    console.log ("Hola mundo");
}

// Ejercicio 2

function createAlert() {
    alert("Em dic Sergi!");
}

// Ejercicio 3

function nombreApellido() {
    var nombre = "Sergi";
    var apellido = " Ortiz";
    document.getElementById("ejercicio3").innerHTML = nombre + "" + apellido;
}

// Ejercicio 4

function sumaDosNumeros(n1, n2) {
    var num1 = n1;
    var num2 = n2;
    var suma = n1 + n2;
    var resultado = "La suma entre " + n1 + " i " + n2 + " es " + suma;
    document.getElementById("ejercicio4").innerHTML = resultado;
}

// Ejercicio 5

function notaExamen(nota) {
    if (nota < 5) {
        alert("Ooh, has suspendido el examen con un " + nota);
    }
    else {
        alert("Genial, has aprobado el examen con un " + nota);
    }
}

// Ejercicio 6

// Parte 1
function cambiarColor() {
    var fraseCoche = document.getElementById("cocheAzul").textContent;
    var cambioDeColor = fraseCoche.replace('blau', 'verd');
    document.getElementById("ejercicio6Parte1").innerHTML = cambioDeColor;
}

// Parte 2
function cambiarLetras() {
    var fraseCoche = document.getElementById("cocheAzul").textContent;
    var cambioOporU = fraseCoche.replace(/o/g, 'u');
    document.getElementById("ejercicio6Parte2").innerHTML = cambioOporU;
}

// Ejercicio 7

function listadoObjetos() {
    var listado = ['taula','cadira','ordinador','llibreta'];
    for (let i = 0; i < listado.length; i++) {
        resultadoListado = "L'objecte " + listado[i] + " està a la posició " + i + ".";
        document.write(resultadoListado + "<br>");
    }
}

// Ejercicio 8

function calculadora(operador, valor1, valor2) {
    var resultado;
    switch (operador) {
        case 'suma':
            resultado = valor1 + valor2;
            break;
        case 'resta':
            resultado = valor1 - valor2;
            break;
        case 'mutiplicar':
        case 'mutiplicacio':
        case 'mutiplicacion':
            resultado = valor1 * valor2;
            break;
        case 'dividir':
        case 'divisio':
        case 'division':
            resultado = valor1 / valor2;
            break;
        default:
            resultado = "Lo lamentamos, pero la operación aritmética " + "'" + operador + "' no es valida";
    }
    document.getElementById("ejercicio8").innerHTML = resultado;
}