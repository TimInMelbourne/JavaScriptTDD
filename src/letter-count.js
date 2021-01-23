//getLetterCount returns all characters in a string and the numbers of characters
//etc string cat returns c:1, a:1, t:1

const getLetterCount = (string) => {
  if (string.length === 0) return {};
  const letters = string.split('');
  let letterCount = {};

  letters.forEach((letter) => {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  });
  return letterCount;
};

console.log(getLetterCount('cat'));

module.exports = getLetterCount;
