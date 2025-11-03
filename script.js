const operacion = (num) => {
    let n = num ; let n2 = num ; numCalculados = []
    for(let i = 0; i < 20 ; i++){
        if(n >= 500) {
            n = n + n2
        }
        else {
            n = n - n2
        }
        numCalculados.push(n)
    }
    return numCalculados
}

//ejecucion funciones
numero = Number(prompt('Escriba un número al azar'))
console.log(`La operación dio los siguientes números ${operacion(numero)}`);