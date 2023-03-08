const { findMissingNumbers } = require('./katas');

describe('findMissingNumbers()', () => {
  it('should work for gaps of 1 and when numbers are sorted with a single missing numbers', () => {
    expect(findMissingNumbers([1, 3, 4])).toEqual([2]);
  });

  it('should work for gaps of 1 and when numbers are sorted with multiple missing numbers', () => {
    expect(findMissingNumbers([1, 3, 4, 6])).toEqual([2, 5]);
  });

  it('should work for gaps greater than 1 when numbers are sorted', () => {
    expect(findMissingNumbers([1, 5, 6])).toEqual([2, 3, 4]);
  });

  it('should work for unsorted numbers', () => {
    expect(findMissingNumbers([5, 6, 1])).toEqual([2, 3, 4]);
  });
});
