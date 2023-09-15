// Ex 1: Given an array of integers, removing duplicate elements and
// creating an array whose elements are unique.
// (Eg: [1,2,2,3,4,4,4,5,6] => [1,2,3,4,5,6]). Find 3-4 ways to solve this.

// solution 1: using Set
export const removeDuplicateElementsUsingSet = (arr) => {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr;
};

// solution 2: using filter
export const removeDuplicateElementsUsingFilter = (arr) => {
  const uniqueArr = arr.filter((value, index) => {
    // Return true for elements whose first index matches their current index in the array.
    // This keeps only the first occurrence of each unique element.
    return arr.indexOf(value) === index;
  });
  return uniqueArr;
};

// solution 3: using 2 pointers
export const removeDuplicateElsUsing2Pointer = (arr) => {
  const uniqueArr = [];
  const seen = {}; // Using an object as a hash set

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!seen[element]) {
      seen[element] = true; // Mark element as seen
      uniqueArr.push(element); 
    }
  }
  return uniqueArr;
};