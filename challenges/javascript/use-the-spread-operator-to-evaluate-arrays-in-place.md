---
title: "ES6: Use the Spread Operator to Evaluate Arrays In-Place"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Copy all contents of arr1 into another array arr2 using the spread operator.

#### { My Solution }
```
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1];
})();
```