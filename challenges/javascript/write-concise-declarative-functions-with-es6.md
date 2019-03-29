---
title: "ES6: Write Concise Declarative Functions with ES6"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
When defining functions within objects in ES5, we have to use the keyword function as follows:

setGear = function ()...

With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

setGear()...

Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

#### { My Solution }
```
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);
```