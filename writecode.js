//--Sum Zero--//
function addToZero(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if (array[i] + array[j] === 0){
                return true
            }   
        }   
    }
}
console.log(addToZero([1, 2, 3, -3]))
//Run Time// O(n^2)
//Space Complexity// O(1)

//--Unique Character--//
function hasUniqueChars(word){
    let characters = new Set([])
    for (let i = 0; i < word.length; i++){
        characters.add(word[i])
    }
    return characters.size === word.length
}
console.log(hasUniqueChars('Moonday'))
//Run Time// O(n)
//Space Complexity// O(n)

//--Pangram Sentence--//
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }

  console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
  console.log(isPangram('I like cats, but not mice'))
//Run Time//O(n)
//Space Complexity//O(1)

//--Longest Word--//
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
console.log(findLongestWordLength("hi, hello"))
//Run Time// O(n)
//Space Complexity//O(n)
