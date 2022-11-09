function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target)
};

function binarySearch(arr, target) {

  let low = 0;
  let high = arr.length-1;

  while (high >= low) {
    let mid = Math.floor((low+high)/2)

    if (target === mid) {
      return mid;
    } else if (target > mid) {
      low = mid+1
    } else if (target < mid) {
      high = mid-1
    }
  }
  return -1
}


module.exports = [linearSearch, binarySearch]