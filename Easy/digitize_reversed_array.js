// Problem: Convert number to reversed array of digits
// Description: Convert the given number into an array of its digits in reversed order.
// Link: https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits

function digitize(n) {
  let initialArray = (""+n).split('');
  let reversedArray = [];
  for (var i = initialArray.length - 1; i >= 0; i--) {
    reversedArray[i] = parseInt(initialArray.shift(),10);
  }
  return reversedArray;
}

// Test cases:
console.log(digitize(348597));
  
