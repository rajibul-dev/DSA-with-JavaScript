function countVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const lowercaseStr = string.toLowerCase();

  let result = 0;

  lowercaseStr.split("").forEach((char) => {
    vowels.forEach((vowel) => {
      char.includes(vowel) ? result++ : result;
    });
  });

  return result;
}

module.exports = countVowels;
