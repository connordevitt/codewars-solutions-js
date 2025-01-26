// Problem: Are You Playing Banjo?
// Description: Determine if a person plays banjo based on their name.
// Link: https://www.codewars.com/kata/are-you-playing-banjo

function areYouPlayingBanjo(name) {
    if (name[0] === 'R' || name[0] === 'r') {
      return name + " plays banjo";
    } else {
      return name + " does not play banjo";
    }
  }
  
  // Test cases
  console.log(areYouPlayingBanjo('Richard')); // "Richard plays banjo"
  console.log(areYouPlayingBanjo('Ringo'));   // "Ringo plays banjo"
  console.log(areYouPlayingBanjo('royce'));   // "royce plays banjo"
  console.log(areYouPlayingBanjo('Alice'));   // "Alice does not play banjo"
  