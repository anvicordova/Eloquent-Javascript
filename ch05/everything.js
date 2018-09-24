// Implement every with a loop
function every(array, test){
  for(let n = 0; n < array.length; n++){
    if(!test(array[n])) return false;
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

// Implement every with some
function everyWithSome(array, test){
  if(array.length == 0){
    return true;
  }else if(array.length == 1){
    return array.some(test);
  }else if(array.some(test)){
      array.shift();
      return everyWithSome(array, test)
  }else {
    return false;
  }
}

console.log(everyWithSome([1, 3, 5], n => n < 10));
console.log(everyWithSome([2, 4, 16], n => n < 10));
console.log(everyWithSome([], n => n < 10));

// Implement with some -- book solution: is there some element that doesn'comply the predicate?
function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}
console.log(every2([1, 3, 5], n => n < 10));
console.log(every2([2, 4, 16], n => n < 10));
console.log(every2([], n => n < 10));
