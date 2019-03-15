---
title: "ES6: Use Destructuring Assignment to Assign Variables from Nested Objects"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.

#### { My Solution }
```
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const { tomorrow : { max : maxOfTomorrow }} = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
```