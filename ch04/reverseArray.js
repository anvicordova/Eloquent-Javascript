function reverseArray(array){
  let newArray = []
  for(let element of array){
    newArray.unshift(element);
  };
  return newArray;
}


let array = [1,2,3];
console.log(reverseArray(array));
console.log(array);


// Option 1 - Reverse Array in Place
// Why this works? The binding otherArray is in the global scope so
// it can be accesed through the whole program.

let globalArray = [4,5,6];

function reverseArrayInPlace(){
  globalArray = reverseArray(globalArray);
}

reverseArrayInPlace();
console.log(globalArray);

// Option 2 - Reverse Array in Place
// Why this works? We pass the binding itself to the function!

let anotherArray = [7,8,9];

function reverseInPlaceWithSwap(array){
  let last = array.length - 1;

  for(let i = 0; i < array.length/2; i++){
    swap(i, last - i)
  }

  function swap(posA, posB){
    let dummy = array[posA];
    array[posA] = array[posB]
    array[posB] = dummy
  }
}

reverseInPlaceWithSwap(anotherArray)
console.log(anotherArray);
