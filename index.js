function isPalindrome(word) {
  // Write your algorithm here
  return word === reversestring(word)
}
function reversestring(word) {
  let newString = ''
  for(let i = word.length -1; i >= 0; i--){
    newString += word [i]
  }
  return newString
}

/* 
  Add your pseudocode here
  for word length -- 
      new string += letter 
  return word = new string 

  function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
*/

/*
  Add written explanation of your solution here
  is palindrome is a function that accepts 1 pramator. the first pramator
  is a string. we have a second function called reverse string that takes
  the same pramator. inside the revorse string function, we have a forLoop
  that goes in reverse and will add each letter into new string. Once it is
  retrun it will do a comparison to check if the string is the same or if
  it is "true" or "false".
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
