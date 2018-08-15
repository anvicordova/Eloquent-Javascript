function isEven(n){
  if(n == 0)  return true;
  else if(n == 1)  return false;
  else return isEven(Math.abs(n - 2));
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-100));

// The book's solution is:

// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }

// That makes sense because by applying Math.abs(n-2) for negative numbers,
// I'm increasing the recursion calls by one.  -1 - 2 = -3 =>  3 => 1 = false
// Whereas -1 = > 1 = > false
