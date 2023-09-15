import {
  removeDuplicateElementsUsingSet,
  removeDuplicateElementsUsingFilter,
  removeDuplicateElsUsing2Pointer,
} from "./exercise1.js";
import {
  findIntegersWithMostRepetitions,
  findIntegersWithMostRepetitionsRefactored
} from "./exercise2.js"

// Ex 1: Given an array of integers, removing duplicate elements and
// creating an array whose elements are unique.
// (Eg: [1,2,2,3,4,4,4,5,6] => [1,2,3,4,5,6]). Find 3-4 ways to solve this.

console.log("ex 1");
const arrEx1 = [0, 1, 13, 0, 0, 4, 4, 4];

// solution 1: using set
console.log("using set: ", removeDuplicateElementsUsingSet(arrEx1));

// solution 2: using filter
console.log("using filter:", removeDuplicateElementsUsingFilter(arrEx1));

// solution 3: using 2 pointers
console.log("using 2 pointer: ", removeDuplicateElsUsing2Pointer(arrEx1));
console.log("end ex1");


// Ex 2: Given an array of integers, find integers with the most
// repetitions. If multiple numbers have the same maximum number
// of repetition, export all of them.
// Maximum 3 rounds, not nested.

console.log("ex 2");

const arrEx2 = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5];

console.log("most repetitions: ", findIntegersWithMostRepetitions(arrEx2));

// refactored code ex 2
console.log(
  "most repetitions with refactored code: ",
  findIntegersWithMostRepetitionsRefactored(arrEx2)
);

console.log("end ex2");

// Ex 3: Create a decision question tree, the answer of the previous
// question will affect the appearance of the following question.
// Requirements: Easily add, edit or delete to the questionnaire at
// low cost.
