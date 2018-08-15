let countChar = function(string, char){
  let total = 0;

  for(let i = 0; i < string.length; i++){
    if(string[i] == char) total++
  };

  return total;
};

let countBs = (string) => { return countChar(string, "B"); }

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
