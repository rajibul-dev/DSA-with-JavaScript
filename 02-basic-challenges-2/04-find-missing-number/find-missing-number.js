function findMissingNumber(numbers) {
  if (numbers.length === 0) return 1;

  let totalIfNumberNotMissing = 0;
  const maxNumber = Math.max(...numbers);
  for (let i = 0; i <= maxNumber; i++) {
    totalIfNumberNotMissing += i;
  }

  const totalWhileNumberMissing = sum(numbers);

  return totalIfNumberNotMissing - totalWhileNumberMissing;
}

// helpers
function sum(numbers) {
  return numbers.reduce((acc, curr) => curr + acc, 0);
}

module.exports = findMissingNumber;
