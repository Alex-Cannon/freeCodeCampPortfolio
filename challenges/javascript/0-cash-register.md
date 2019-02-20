### Cash Register Project

#### { Instructions }
**Design a cash register drawer** function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

#### { Solution }
```
// Value In pennies
const BILLS = [
  ["ONE HUNDRED", 10000],
  ["TWENTY", 2000],
  ["TEN", 1000],
  ["FIVE", 500],
  ["ONE", 100],
  ["QUARTER", 25],
  ["DIME", 10],
  ["NICKEL", 5],
  ["PENNY", 1]
];

function checkCashRegister(price, cash, cid) {
  var change = cash * 100 - price * 100; // (In pennies)
  var yourCash = {};
  var myCash = {};
  var i = 0;

  // No change? Done.
  if (change === 0) {
    return {
      status: "CLOSED",
      change: cid
    };
  }

  // Swap out array for an object
  cid.forEach(money => {
    myCash[money[0]] = parseInt(money[1] * 100);
  });

  // Give bills big -> small until change = 0 or fail
  while(i < BILLS.length && change > 0) {
    var billName = BILLS[i][0];
    var billValue = BILLS[i][1];

    // Can accept && give change
    if (change - billValue > 0 && myCash[billName] > 0) {
      // Set yourCash[billName]
      yourCash[billName] = 0;
      // Give as many of this bill as I can.
      while(change - billValue >= 0 && myCash[billName] > 0) {
        yourCash[billName] += billValue / 100;
        myCash[billName] = parseInt(myCash[billName] - billValue);
        change -= billValue;
      }
    }
    i++;
  }

  if (change === 0) {
    let hasMoney = false;

    Object.keys(myCash).forEach(key => {
      if (myCash[key] > 0) {
        hasMoney = true;
      }
    });

    if (hasMoney) {
      return {
        status: "OPEN",
        change: Object.keys(yourCash).map(key => {
        let obj = [key, yourCash[key]];
        console.log(JSON.stringify(obj));
        return obj;
      })};
    } else {
      console.log("NO Money Left...");
      return {
        status: "CLOSED",
        change: cid
      };
    }
  }
  return {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
```