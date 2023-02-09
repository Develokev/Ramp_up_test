//EXCER 02 Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta
//(debes presuponer que la frase tiene un único espacio entre palabras).

let frase = prompt("Hola, por favor escribe una frase de varias palabras");

let cont_espacios = 0;
let caracter = " ";

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == caracter) {
        cont_espacios++
    }
}
alert("Tu frase tiene " + (cont_espacios + 1) + " palabras.");

//Extra: Supón que el usuario puede equivocarse y poner más de un espacio entre palabras,
//nuestro programa debe seguir contando bien las palabras

// de momento esta idea no ha funcionado (EXTRA)

// for (let i = 0; i < frase.length; i++) {
//     if (frase[i] == caracter_doble) {
//         cont_espacios = (cont_espacios -1)
//     }
// }
// alert("Tu frase tiene " + (cont_espacios + 1) + " palabras.");