/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    const strToLower = str[i].toLowerCase();

    for (let i = 0; i < 5; i++) {
      if (strToLower === vowels[i]) count += 1;
    }
  }

  return count;
}
// Time Complexity: O(n)
// Space Complexity: O(1)

module.exports = countVowels;
