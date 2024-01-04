/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  let arr = new Array(256);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }

  for (let i = 0; i < str1.length; i++) {
    // Gets the character's code point (a numerical representation)
    // Subtracts the code point of 'a' to map it to a bin index (0 for 'a', 1 for 'b', and so on)
    // 
    arr[
      str1[i].toLowerCase().charCodeAt(0) - "a".toLowerCase().charCodeAt(0)
    ] += 1;
    arr[
      str2[i].toLowerCase().charCodeAt(0) - "a".toLowerCase().charCodeAt(0)
    ] -= 1;
  }

  for (const element of arr) {
    if (element !== 0) return false;
  }

  return true;
}
// Time Complexity: O(n)
// Space Compelxity: O(256)

module.exports = isAnagram;
