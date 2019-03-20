---
title: "ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

#### { My Solution }
```
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
```