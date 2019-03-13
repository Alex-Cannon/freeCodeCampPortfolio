---
title: "ES6: Use Destructuring Assignment to Assign Variables from Objects"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Use destructuring to obtain the average temperature for tomorrow from the input object AVG_TEMPERATURES, and assign value with key tomorrow to tempOfTomorrow in line.

#### { My Solution }
```
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // Assign tempOfTomorrow to avgTemperatures.tomorrow using ES6
  const { tomorrow : tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}
```