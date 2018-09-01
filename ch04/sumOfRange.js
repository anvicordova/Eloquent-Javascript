let range = function(start, end, step){
  let rangeArray = [];

  if(start <= end){
    for(let n = start; n <= end; n+= step || 1){
      rangeArray.push(n);
    }
  }else{
    for(let n = start; n >= end; n+= step || -1){
      rangeArray.push(n);
    }
  }

  return rangeArray;
}

let sum = function (numbers){
  let total = 0;
  for(let number of numbers){
    total += number
  };
  return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(range(5, 2));
console.log(range(1, 10, 2));
console.log(range(1, 10, 4));
console.log(sum(range(1, 10)));

// Book's solution uses `step = start < end ? 1 : -1` in the parameter!
