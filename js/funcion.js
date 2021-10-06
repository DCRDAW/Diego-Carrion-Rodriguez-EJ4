'use strict'
let long = 13
let caracteres = ["a","e","v"]
let array=[]
array=funcion(long,caracteres)
function funcion(long,caracteres) {
    let array2=[]
    let alfa = "abcdefghijklmnopqrstuvwxyz"
    for(let i=0;i<caracteres.length;i++){
        alfa=alfa.replace(caracteres[i],'')
    }
    for(let i=0;i<long;i++){
        array2[i]=alfa[Math.floor(Math.random() * alfa.length)]
    }
    return array2  
}
for(let i=0;i<array.length;i++){
    document.write(array[i])
}