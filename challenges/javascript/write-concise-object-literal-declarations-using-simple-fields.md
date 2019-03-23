---
title: "ES6: Write Concise Object Literal Declarations Using Simple Fields"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Use simple fields with object literals to create and return a Person object.

#### { My Solution }
```
const createPerson = (name, age, gender) => ({name, age, gender});

// returns a proper object
console.log(createPerson("Zodiac Hasbro", 56, "male")); 
```