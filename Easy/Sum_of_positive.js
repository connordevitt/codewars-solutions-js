// You get an array of numbers, return the sum of all of the positives ones


function positiveSum(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  
  console.log(positiveSum('1,2,6,0'));