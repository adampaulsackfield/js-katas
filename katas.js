// 1.  How do you find the missing numbers in a given integer array?
// Using the reduce function we can find missing numbers, using the accumulator, current and the index is enough to work out the numbers in between and add to a missing array. This does require the given array is sorted, but we can fix this by sorting on the first step.
const findMissingNumbers = (arr) => {
  return arr
    .sort((a, b) => a - b)
    .reduce((acc, curr, index) => {
      if (index !== arr.length - 1) {
        const next = arr[index + 1];

        if (curr + 1 !== next) {
          const missingCount = next - curr - 1;
          const missing = [];

          for (let i = 0; i < missingCount; i++) {
            missing.push(curr + i + 1);
          }

          return [...acc, ...missing];
        }
      }

      return acc;
    }, []);
};

console.log(
  'Find missing numbers: [1, 2, 4, 6, 7, 9] => ',
  findMissingNumbers([1, 2, 4, 6, 7, 9])
);
console.log(
  'Find missing numbers: [2, 1, 4, 7, 6, 9] => ',
  findMissingNumbers([2, 1, 4, 7, 6, 9])
);
console.log(
  'Find missing numbers: [2, 1, 4, 7, 6, 9, 23, 12] => ',
  findMissingNumbers([2, 1, 4, 7, 6, 9, 23, 12])
);
console.log('Find missing numbers: [42, 1] => ', findMissingNumbers([42, 1]));

// 2.  How do you find the duplicate number on a given integer array?
// By using a Set we can get a a copy of the arrays unique values. Then we can filter over the array and remove items from  the set as we find them. If one doesn't exist then we must have deleted it and it was a duplicate.
const findDuplicateNumber = (arr) => {
  const set = new Set(arr);

  return arr.filter((number) => {
    if (set.has(number)) {
      set.delete(number);
    } else {
      return number;
    }
  });
};

console.log(
  'find duplicate numbers: [1, 2, 2, 6, 7, 9] => ',
  findDuplicateNumber([1, 2, 2, 6, 7, 9])
);
console.log(
  'find duplicate numbers: [2, 1, 4, 4, 7, 6, 6, 9, 23, 23, 23, 12] => ',
  findDuplicateNumber([2, 1, 4, 4, 7, 6, 6, 9, 23, 23, 23, 12])
);

// 3.  How do you find duplicate numbers in an array if it contains multiple duplicates?
// findDuplicates already does this

// 4.  How do you remove duplicates from an array in place?
const removeDuplicatesInPlace = (arr) => {
  return arr
    .sort((a, b) => a - b)
    .filter((item, index) => arr.indexOf(item) === index);
};

console.log(
  'Remove duplicates in place: [1, 2, 3, 2, 4, 3] => ',
  removeDuplicatesInPlace([1, 2, 3, 2, 4, 3])
);
console.log(
  'Remove duplicates in place: [2, 1, 4, 4, 7, 6, 6, 9, 23, 23, 23, 12] => ',
  removeDuplicatesInPlace([2, 1, 4, 4, 7, 6, 6, 9, 23, 23, 23, 12])
);

// 5.  How do you find the largest and smallest number in an unsorted integer array?
const findSmallestAndLargest = (arr) => {
  return [Math.min(...arr), Math.max(...arr)];
};

console.log(
  'Find smallest and largest [42, 12, 4, 123, 5] => ',
  findSmallestAndLargest([42, 12, 4, 123, 5])
);
console.log(
  'Find smallest and largest [2, 1, 4, 4, 7, 6, 6, 9, 23, 23, 23, 12] => ',
  findSmallestAndLargest([2, 1, 4, 4, 7, 6, 6, 9, 23, 23, 23, 12])
);

module.exports = {
  findMissingNumbers,
  findDuplicateNumber,
  removeDuplicatesInPlace,
  findSmallestAndLargest,
};
