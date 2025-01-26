// Problem: Reversed Strings
// Description: Reverse the provided string.
// Link: https://www.codewars.com/kata/reversed-strings

function solution(str) {
    const splitString = str.split('');
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
  }
  
  // Test cases
  console.log(solution("hello")); // "olleh"
  console.log(solution("world")); // "dlrow"
  