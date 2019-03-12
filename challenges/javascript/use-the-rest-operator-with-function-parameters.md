---
title: "ES6: Use the Rest Operator with Function Parameters"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
In order to help us create more flexible functions, ES6 introduces the rest operator for function parameters. With the rest operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

The rest operator eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

**Modify the function sum so that it uses the rest operator and it works in the same way with any number of parameters.**
#### { My Solution }
```
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
```