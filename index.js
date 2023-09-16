function hasTargetSum(array, target) {
  // Create an empty object to store the numbers we've seen so far
  const seenNumbers = {};

  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    
    // Calculate the difference between the target and the current number
    const difference = target - currentNumber;
    
    // If the difference is in the seenNumbers object, we found a pair
    if (seenNumbers[difference]) {
      return true;
    }
    
    // Otherwise, store the current number in the seenNumbers object
    seenNumbers[currentNumber] = true;
  }

  // If no pair is found, return false
  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
