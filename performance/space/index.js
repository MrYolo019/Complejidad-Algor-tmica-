function contar(n){
    for (let i = 0; i < n; i++){
        console.log(i)
    }
}

function repetir (arreglo) {
    let arregloRepetido = arreglo;
    return arregloRepetido;
}

function convertirAString(arreglo) {
    let result = arreglo.map(elemento => elemento.toString());
    return result;
}

convertirAString([1,2,3])

function dosDimensiones(valor) {
    let x = new Array(valor);
    for (let i = 0; i < valor; i++) {
        x[i] = new Array(valor).fill('hola');
        return x;
    }
}