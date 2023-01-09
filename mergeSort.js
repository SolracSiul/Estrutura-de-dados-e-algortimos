/* 
Divide et impera
O merge Sort consiste em dividir o array sequencialmente de forma que seja possível
comparar o valor de apenas dois elementos. A partir dessa comparação é possível remontar o
array de forma que ele esteja ordenado.
*/
function mergeSort(vetor, begin, end){
    if(begin < end){
        let mid = Math.floor((begin + end) / 2);
        mergeSort(vetor, begin, mid);
        mergeSort(vetor, mid + 1, end);
        interCalar(vetor, begin, mid, end)
    }
}
function interCalar(vetor, begin, mid, end){
    let length = end - begin + 1;
    let left = begin;
    let right  = mid + 1
}
//falta terminar 