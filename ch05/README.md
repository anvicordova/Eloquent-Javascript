# CH 05 - Notes


> *"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies."*
*C.A.R. Hoare, 1980 ACM Turing Award Lecture*

# **Abstractions**

Abstractions allow programmers to hide the details and work in the problems at a higher level. It is important that as programmers we learn to recognize when we are working at a low level of abstraction.

*I think the idea here is to learn to recognize the right level of abstraction we need to the problem we are trying to solve, now, how do we achieve this is the question :thinking:*

## **Function Values**

There are some times that we need to use the same abstraction over and over, a common example of this could be the need to repeat an action for a set of elements, for example:

  ```javascript
    for(let i = 0; i < 10; i++){
    	console.log(i);
    }
  ```

We can abstract the code above to any action by wrapping it to a function like this:

  ```javascript
    function repeat(n, action){
    	for(let i = 0; i < n; i++){
    		action(i);
    	}
    }

    repeat(10, console.log)
  ```

However it is not necessary to pass an action to the `repeat` function, we can pass a `function value` instead

  ```javascript
    let labels = [];
    repeat(10, i => {labels.push(i)});
    console.log(labels)
  ```

## **High-Order functions**

> *Functions that operate on other functions, either by taking them as arguments or by returning them, are called **higher-order functions**.

[...]

Higher-order functions **allow us to abstract over actions, not just values**.*

Javascript makes use of High-Order functions to common abstractions, some of them are the following:

- `foreEach`

    Iterates over an array and applies the action to each of the elements.

    ```javascript
        ["A", "B"].forEach(l => console.log(l));
    ```

- `filter`

    Returns an array with filtered results, by applying a condition to each of the elements

    ```javascript
        let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        console.log(words.filter(word => word.length > 6));
        // expected output: Array ["exuberant", "destruction", "present"]
    ```

- `map`

    Applies a transforming function to each of the elements of the array and returns a new  array

    ```javascript
        let array1 = [1,2,3,4];
        console.log(array1.map(x => x + 3));
    ```

- `reduce`

    Returns a single value that is the result of applying a combining function to all the elements. It can receive an initial value as argument.

    ```javascript
        console.log([1, 2, 3, 4].reduce((a, b) => a + b));
        //10
        console.log([1, 2, 3, 4].reduce((a, b) => a + b, 5));
        //15
    ```

- `some`

    Returns `true`  if any of the elements of the arrays responds to `true` to the function passed. Returns `false` otherwise.

    ```javascript
        console.log([1, 2, 3, 4, 5].some(x => x % 2 === 0));
    ```

An important aspect of high-order functions is that we can **compose** them, we can chain them.

## **Javascript Strings**

Strings in JS are represented with `UTF-16` encoding, which means that characters use a pair of 16-bit code.
