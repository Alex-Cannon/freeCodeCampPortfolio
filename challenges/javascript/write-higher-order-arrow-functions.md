---
title: "ES6: Write Higher Order Arrow Functions"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.

#### { My Solution }
```
const squareList = (arr) => {
  const squaredIntegers = arr.filter((num) => {
    return num > 0 && Number.isInteger(num);
  }).map((val) => {
    return Math.pow(val, 2);
  });

  return squaredIntegers;
};
```