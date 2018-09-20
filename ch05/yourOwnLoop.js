function loop(value, test, update, bodyAction){
  for(let n = value; test(n); n = update(n)){
    bodyAction(n)
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
