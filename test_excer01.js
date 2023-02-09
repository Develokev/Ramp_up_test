//EXCER 01 Solicita al usuario que elija entre opcion 1 y 2
//Opcion 1: pedir al usuario dos numeros e indicar si son impares y multiplos de 25 ambos, uno de ellos o ninguno.
//Opcion 2: pedir al usuario una palabra y comprobar si empieza o termina por s/S


var eleccion = prompt("Por favor elija que opción utilizar. Escriba 'a' o 'b':")

//Opcion 1: pedir al usuario dos numeros e indicar si son impares y multiplos de 25 ambos, uno de ellos o ninguno.
function a() {
    let num1 = prompt("Por favor, escriba un numero:");
    let num2 = prompt("Gracias, por favor, escriba otro numero:");
    let impar = "";

    if (impar == (num1%2 == 0)){
    alert("Tu primer número es impar.");
}   else {
    alert("Tu primer numero es par");
}   if (impar == (num2%2 == 0)) {
    alert("Tu segundo numero es impar");
}   else {
    alert("Tu segundo numero es par");
}   if (num1 == (num1%25 == 0)) {
    alert("El número " + num1 + " es multiplo de 25");
}   else {
    alert("El número " + num1 + " NO es multiplo de 25");
}   if (num2 == (num2%25 == 0)) {
    alert("El número " + num2 + " es multiplo de 25");
}   else {
    alert("El número " + num2 + " NO es multiplo de 25");
}
}
//Opcion 2: pedir al usuario una palabra y comprobar si empieza o termina por s/S
function b() {
    let palabra = prompt("Por favor escriba una palabra")

    if (palabra[0] == "s" || palabra[0] == "S") {
    alert("Tu palabra empieza por 's/S'");
}   else {
    alert("Tu palabra no empieza por 's/S'");
}   for (let i = 0; i < palabra.length; i++) {
        if ((palabra[i] == palabra.length) == "s" || (palabra[i] == palabra.length) == "S"); {
        alert("Tu palabra termina en 's/S'.");
    break
}}}

if (eleccion != "a" && eleccion != "b") {
    alert("Lo siento, intente de nuevo e introduzca una letra correcta");
}

if (eleccion == "a") {
    a();
}

if (eleccion == "b") {
    b();
}