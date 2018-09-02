function deepEqual(first, second){
  if(isObject(first) && isObject(second)){
    return compareObjects(first, second);
  }else{
    return first === second;
  }
}

function isObject(subject){
  return typeof subject == "object"
}

function compareObjects(first, second){
  if(first == second){
    return true;
  }else if(haveTheSameKeys(first, second)){
    let keys = Object.keys(first);

    for(let key of keys){
      if(!deepEqual(first[key], second[key])) return false;
    }
    return true;

  }else{
    return false;
  }
}

function haveTheSameKeys(first, second){
  let firstKeys = Object.keys(first);
  let secondKeys = Object.keys(second);

  for(let key of firstKeys){
    if (!secondKeys.includes(key)) return false;
  }
  return true;
}

console.log(deepEqual(1,1));
console.log(deepEqual(1,2));
console.log(deepEqual("hola",2));

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
