/*
***Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
***Essentially, rearrange the digits to create the highest possible number.
***https://www.codewars.com/kata/reviews/5485d20fd8325e250a00013e/groups/67ae86458453b74bf3060d97
*/


function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }
  
    // Test cases:
    console.log(descendingOrder(0)); // 0
    console.log(descendingOrder(1)); // 1
    console.log(descendingOrder(15)); // 51
    console.log(descendingOrder(1021)); // 2110