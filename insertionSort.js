/*Insertion Sort 
O  insertion sort ele vai supor que a o índice 0 estará ordenado, 
começando a partir do segundo valor, ele irá comparar com o segundo valor,
caso seja menor, substitui, caso n continua a mesma coisa;
*/
function insertionSort(array){
    let atual;
    for(i = 1; i < array.length ;i ++){
        let j = i -1; // for comparando com o número anterior
        atual = array[i];
    while(j >=0 && atual < array[j]){
        array[j+1] = array[j];
        j--;
    }
    array[j+1] = atual;
    }
    return array
}
console.log(insertionSort([5,4,3,21,1]))