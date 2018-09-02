# CH 4 - Notes

# **Object Properties**

We can access the properties of an object in two ways:

1. By specifying the property_name after a dot `.`
2. By specifying the property_name as a string within square brackets `[]`

```javascript
    object.property_name
    object["property_name"]
```

# **Objects**

> *You may think of objects as octopuses with any number of tentacles, each of which has a name tattooed on it.*

## *Creating Objects*

We use braces `{}` to create objects. example:

```javascript
    let tournament = {
    	title: "Annual Archery Competition",
    	numberOfParticipants: 100,
    	date: "April 13th, 2019",
    	categories: ["recurve", "compound"]
    };
```
## ***Some operators in objects***

- `delete`

  Allow us to delete a property of an object. The difference with assigning a property as `undefined` is that with `delete` we in-fact  remove the property of the object at all.

    ```javascript
      delete tournament.categories;
      console.log(tournament.categories);
      // undefined
    ```      

- `in`

  Allow us to see if a property is present in an object

    ```javascript
      console.log("date" in tournament);
      // true

      console.log("participants" in tournament);
      // false
    ```

- `Object.keys`

  Allow us to see which are the properties of an object

    ```javascript
      console.log(Object.keys(tournament));
      //["title", "numberOfParticipants", "date", "categories"]
    ```

- `Object.assign`

  Allow us to copy all properties from one object to another

    ```javascript
      let otherTournament = {
      	distances: [10, 20, 30, 50, 70]
      };

      console.log(otherTournament, tournament)
      // {distances: Array(5), title: "Annual Archery Competition",
      // numberOfParticipants: 100, date: "April 13th, 2019",
      // categories: Array(2)}
    ```

## *Mutability*

Number, Strings, Booleans are `immutable` that is, we can't change the content of them,

**ex:**

`*"cat"` can't be converted into `"rat"`*

or

```javascript
    let hola = "Hola";
    hola.english = "Hello";
    console.log(hola.english);
    // undefined
    // Properties assigned to inmutable types can't have properties!!
```

In objects we have two cases:

> "*there is a difference between having two references to the same object and having two different objects that contain the same properties."*

```javascript
    object1 = { property: "Hello" };
    object2 = object1;
    object 3 = { property: "Hello" };

    console.log(object1 == object2);
    //true

    console.log(object1 == object3);
    //false
```

In the example above, `object1` and `object2` have the same `*identity*`

On the other hand, `object2` and `object3`  are objects with the same properties

> *"When you compare objects with JavaScript’s == operator, it compares by identity: it will produce true only if both objects are precisely the same value. Comparing different objects will return false, even if they have identical properties. There is no “deep” comparison operation built into JavaScript"*

# Spread Syntax

We can pass an *iterable* to a function so it can accept any number of arguments. In the following example:

The function  " *'spreads' out the array into the function call, passing its elements as separate arguments"*

```javascript
    function sum(...numbers) {
      let total = 0;
      for(let n of numbers){
        total += n;
      }
      return total;
    }

    const numbers = [1, 2, 3];

    console.log(sum(...numbers));
```

# JSON

Stands for *JavaScript Object Notation.*

> "*It is widely used as a data storage and communication format on the Web, even in languages other than JavaScript"*

## Characteristics:

- Property names should use double quotes
- Only simple data allowed

*More Info:* [https://www.json.org/](https://www.json.org/)
