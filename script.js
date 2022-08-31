const string = prompt('Enter a string: ');

function countVowel(str) { 

  const count = str.match(/[aeiou]/gi);
  return count;
}

const result = countVowel(string);

console.log(result);