# CH3 - Notes

# **Functions**

  ```javascript
    const hello = function(text){
      console.log(text);
    };
  ```

- In order to *declarate*  a function we should  do the following:

  ```javascript
    function square(x) {
      return x * x;
    }
  ```

The difference between functions as values and declared functions is:

- Scope (declared functions can be defined even after the call)
- Declared functions don't need `;` at the end


## **Arrow functions**


```javascript
    const power = (base, exponent) => {
      let result = 1;
      for (let count = 0; count < exponent; count++) {
        result *= base;
      }
      return result;
    };
```

## **Lexical Scoping**

  ```javascript
    const hummus = function(factor) {
    	const ingredient = function(amount, unit, name) {
    		let ingredientAmount = amount * factor;
    		if (ingredientAmount > 1) {
    			unit += "s";
    		}
    		console.log(${ingredientAmount} ${unit} ${name});
    	};

    	ingredient(1, "can", "chickpeas");
    	ingredient(0.25, "cup", "tahini");
    	ingredient(0.25, "cup", "lemon juice");
    	ingredient(1, "clove", "garlic");
    	ingredient(2, "tablespoon", "olive oil");
    	ingredient(0.5, "teaspoon", "cumin");
    };
  ```

## **Closures**

  ```javascript
    function multiplier(factor) {
      return number => number * factor;
    }

    let twice = multiplier(2);
    console.log(twice(5));
    // → 10
  ```
