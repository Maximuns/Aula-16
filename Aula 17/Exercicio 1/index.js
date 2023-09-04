let continuar = true

let numero
let numeros = []

let soma = 0

while (continuar) {
    numero = Number(prompt("Digite um numero para somar ou 0 para sair:"))
    numeros.push(numero)
   
    soma = soma + numero
    
    if(numero === 0 ) {
        numero.pop(numeros)
        console.log(numero)
        console.log(soma)    
    
        continuar = false
    }
    else {
        numeros.push(numero)
        soma = soma + numero
    }
}