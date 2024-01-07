function arrayIntersection(arr1, arr2) {
  const noDuplicateArr1 = Array.from(new Set(arr1));
  const noDuplicateArr2 = Array.from(new Set(arr2));

  let result = [];

  noDuplicateArr1.forEach((number) => {
    if (noDuplicateArr2.includes(number)) {
      result.push(number);
    }
  });

  return result;
}

module.exports = arrayIntersection;
