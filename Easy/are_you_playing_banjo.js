// Problem: Are You Playing Banjo?
// Description: Determine if a person plays banjo based on their name.
// Link: https://www.codewars.com/kata/are-you-playing-banjo

function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] === 'R' || name[0] === 'r') {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

// Test cases:

console.log( areYouPlayingBanjo('Richard'));
console.log( areYouPlayingBanjo('Ringo'));
console.log( areYouPlayingBanjo('royce'));
  
