 /* 
 BUBBLE S0RT O(N) OU O(N2);
 O método consiste em realizar a ordenação de números realizando comparação entre dois números,
 o número maior sempre ficará a direita, no caso, ao final do array;
 */ 


function bubbleSort(array){
    for(let j = array.length -1 ; j > 0; j--){
        for(let i = 0; i < j; i++){
            if(array[i] > array[i+1]){
                let temp = array[i]
                array[i] = array[i+1];
                array[i+1] = temp;
            }        
        }
    }
    return array;
}

console.log(bubbleSort([3,2,1,40,29021,10,3,0,1]))