//Ejercicio 4

function MatrizDiagonal(matriz) {
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz.length; j++) {
            if (i !== j && matriz[i][j] !== 0) 
              return false;
        }
    }
    return true;
}