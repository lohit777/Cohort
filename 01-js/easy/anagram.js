/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let a = str1.toLowerCase().split("").sort().join(""); //join will return all the characters in a string by concatenating without any space  or comna
  let b = str2.toLowerCase().split("").sort().join("");
  if(a==b)
  {
    return true ;
  }
  return false ;
}

module.exports = isAnagram;
