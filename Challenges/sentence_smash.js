// Problem: Sentence Smash
// Description: Join an array of words into a single sentence with spaces.
// Link: https://www.codewars.com/kata/sentence-smash

function smash (words) {
   return words.join(" ");
  
};


console.log(smash(["Hello", "test"])); // "Hello test"
console.log(smash(["This", "is", "fun"])); // "This is fun"
console.log(smash([])); // ""
  
