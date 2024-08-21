module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) return [];

  let towelSortedArray = [];
  let count = 0;

  for (let arr of matrix) {
    if (count % 2 === 0) {
      towelSortedArray = towelSortedArray.concat(arr);
    } else {
      towelSortedArray = towelSortedArray.concat(arr.reverse());
    }

    count++;
  }

  return towelSortedArray;
}