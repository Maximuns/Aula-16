let numeros = true

while (numeros) {
    let numero = Number(prompt("Digite o número 0"))

    console.log(numero)
    if (numero === 0) {
        numeros = false
    }
}