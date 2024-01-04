/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let convertedStr = "";

  // Loop to remove extra spaces and convert to case-insensitive format
  for (let i = 0; i < str.length; i++) {
    const strToLower = str[i].toLowerCase();
    if (strToLower !== " " && strToLower >= "a" && strToLower <= "z") {
      convertedStr += strToLower;
    }
  }

  let start = 0,
    end = convertedStr.length - 1;

  // Palindrome Check
  while (start < end) {
    if (convertedStr[start] != convertedStr[end]) return false;
    start++;
    end--;
  }

  return true;
}
// Time Complexity: O(n + convertedStr.length / 2) ≈ O(n)
// Space Complexity: O(n)
module.exports = isPalindrome;
