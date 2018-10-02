function dominantDirection(text) {
  let result = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
  }).reduce((a,b) => { return a.count > b.count ? a: b; });

  return result.name;
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
