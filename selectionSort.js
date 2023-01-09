/*Selection Sort O(N2)
O selection sort procura encontrar o menor valor do vetor e atribuir ao primeiro índice do array,
e assim sucessitivamente, caso o menor valor seja o primeiro não há troca, o índice também coincide
com o menor valor, o indice[i] é índice e menor valor ao mesmo tempo;

*/

function selectionSort(array){
 let menorAtual;
 for (let i = 0; i < array.length -1; i++){
    menorAtual = i;
    for(let j = i + 1; j < array.length; j++){
        if(array[j] < array[menorAtual]){
            menorAtual = j
        }
    }
    if( i != menorAtual){
        [array[i], array[menorAtual]] = [array[menorAtual], array[i]]
    }
 }
 return array;
}
console.log(selectionSort([5,4,32,1]))