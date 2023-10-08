// Imprimir los números del 21 al 34 en la consola.

        // let numero = 21
        // while (numero <= 34) {
        //     console.log(numero)
        //     numero++
        // }

//Dado un array de números, imprimir en la consola solo los números pares.
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
            for (let number of numbers) {
                if (number %2 === 0)
                console.log("pares " + number)
            }

//Dado un array de números, imprimir en la consola solo los números mayores a 5.
            for (let number of numbers) {
                if (number > 5)
                console.log("mayores 5 " + number)
            }

// Imprimir los números del 1 al 10 en la consola, pero solo los pares

        let unoADiez = 1
        while (unoADiez <= 10) {
            console.log("unoadiez " + unoADiez)
            unoADiez++
        }

//Dada un array de nombres, imprimir solo los nombres que empiezan con la letra "A".

const variousPeople = ["Juan", "Anna", "Renata", "Braulio", "Alex", "Jana"]

for (let i = 0; i < variousPeople.length; i++) {
    vName = variousPeople[i]
    if (vName[0] == "A")
    console.log(vName)
}

//Dada un array de números, encontrar el número más grande y el número más pequeño.

let bigSmallNr = [3,56,665,98,2546,8,0,3,5,-77,55,965]
let smallestNr = ""
let bigestNr = ""

for (let indexx = 0; indexx < bigSmallNr.length; indexx++) {
    if (bigSmallNr[indexx] < smallestNr) {
        smallestNr = bigSmallNr[indexx];
    }
    if (bigSmallNr[indexx] > bigestNr) {
        bigestNr = bigSmallNr[indexx]
    }
    
 }
console.log("smalest " + smallestNr)
console.log("biggest " + bigestNr)

//Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for     

for (let i = 0; i < numbers.length; i++) {
    nr = numbers[i]
    if (nr >= 4 && nr <=9){
    console.log("4/9 " + nr)
    }
}

//Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.

for (let i = 0; i < numbers.length; i++) {
        nr = numbers[i];
        if (nr >= 3 && nr %2 != 0 && nr <=17 )
        console.log("1/17imp " + nr)
}

//Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10

let contarHasta10 = 0

while (contarHasta10 < 10) {
    contarHasta10++
    if (contarHasta10 === 10) { 
    console.log("contarHasta10 === " + contarHasta10)
 }
}

//Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle

let arrayBucle = []
let arrayNr = 4

while (arrayNr >= 4 && arrayNr <= 18) {
    arrayBucle.push(arrayNr)
    if (arrayNr == 18) {
    console.log(arrayBucle)
 }
    arrayNr++
}

//Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado

let pos = 0
let resultado = 0

while (pos < arrayBucle.length) {
    resultado = arrayBucle[pos] + resultado
    pos++
}
console.log("suma de arrayBuckle = " + resultado)

//Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos

const lasTardes = ["Con", "Sofia", "aprendiendo", "bucles"]

for (let palabra of lasTardes) {
    console.log(palabra)
}

// for in

for (let i in lasTardes) {
    console.log(lasTardes[i])
}

//Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3

let iWhile = 1
while (iWhile <= 20 ) {
        if (iWhile %3 == 0) {
        console.log("patata")
    }
    iWhile++
}

// Sumar los números del 1 al 10 y mostrar el resultado en la consola.

let iWhile10 = 1
let suma_iWhile10 = 0
while (iWhile10 <= 10) {
    suma_iWhile10 = iWhile10 + suma_iWhile10
    iWhile10++
}
console.log(suma_iWhile10)

//Dado un array de números, imprimir en la consola la suma de todos los números.

const arrayNumeritos = [1,2,3,4,5,6,7,8,9,10];
let suma_arrayNumeritos = 0

for (let nr of arrayNumeritos) {
    suma_arrayNumeritos = nr + suma_arrayNumeritos
}
console.log(suma_arrayNumeritos)

//Imprimir los números del 1 al 20 en la consola, pero para los múltiplos de 3 imprimir "Fizz", para los múltiplos de 5 imprimir "Buzz" y para los múltiplos de ambos imprimir "FizzBuzz".


let iFizzBuzz = 1
while (iFizzBuzz <= 20) {
    if (iFizzBuzz %3 == 0) {
        console.log(iFizzBuzz + "Fizz")
    }
    if (iFizzBuzz %5 == 0) {
        console.log(iFizzBuzz + "Buzz")
    }
    if (iFizzBuzz %3 == 0 && iFizzBuzz %5 == 0) {
        console.log(iFizzBuzz + "FizzBuzz")
    }
    iFizzBuzz++
}

//  next exersizes with the following array
let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

// Crea una array con la gente que su nombre tiene 4 letras, sin utilizar el método filter de los arrays y muéstralo por consola.

let gente4 = []
for (let i in gente) {
    if (gente[i].nombre.length == 4) {
    gente4.push(gente[i].nombre)
 }
}
console.log(gente4)

//Crea una array con la gente que su nombre empieza por J y sean menores de 40 años, sin utilizar el método filter de los arrays y muéstralo por consola.

let genteJ40 = []

for (let i in gente) {
    if (gente[i].nombre[0].split(0) == "J" && gente[i].edad < 40) {
        genteJ40.push({nombre: gente[i].nombre, edad:gente[i].edad} )
    }
}
console.log(genteJ40)