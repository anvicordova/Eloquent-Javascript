function arrayToList(array){
  let list;

  for (let element of array ){
    list = addElementToList(list, { value: element, rest: undefined });
  };

  return list;
}

function addElementToList(list, element){
  if (list == undefined){
    list = element;
  }
  else{
    list.rest = addElementToList(list.rest, element);
  }
  return list
}

function listToArray(list){
  let array = [];

  addElementToArray(array, list);

  return array;
}

function addElementToArray(array, list){
  if(list.rest == undefined){
    array.unshift(list.value);
  }else{
    addElementToArray(array, list.rest);
    array.unshift(list.value);
  }
}

function prepend(element, list){
  if(list == undefined){
    return { value: element, rest: null };
  }else{
    return { value: element, rest: list }
  }
}

function nth(list, position){
  if(list == undefined){
    return undefined;
  }else if (position == 0) {
    return list.value;
  }else{
    return nth(list.rest, position - 1);
  }
}



console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(prepend(20, null));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 0));
console.log(nth(arrayToList([10, 20, 30]), 5));
