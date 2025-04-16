// bruteForceDuplicateCheck.js

function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

// Example usage
console.log(hasDuplicates([1, 2, 3, 4])); // false
console.log(hasDuplicates([1, 2, 3, 2])); // true
