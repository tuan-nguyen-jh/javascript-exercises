export const findIntegersWithMostRepetitions = (arr) => {
  // Round 1: Count Frequencies 
  const frequencyCounts = {};
  for (const num of arr) {
    if (!frequencyCounts[num]) {
      frequencyCounts[num] = 1;
    } else {
      frequencyCounts[num]++;
    }
  }

  // Round 2: Find Maximum Frequency
  let maxFrequency = 0;
  for (const num in frequencyCounts) {
    if (frequencyCounts[num] > maxFrequency) {
      maxFrequency = frequencyCounts[num];
    }
  }

  // Round 3: Collect Integers with Maximum Frequency
  const integersWithMaxRepetitions = [];
  for (const num in frequencyCounts) {
    if (frequencyCounts[num] === maxFrequency) {
      integersWithMaxRepetitions.push(+num); 
    }
  }

  return integersWithMaxRepetitions;
};

// refactored code ex2
export const findIntegersWithMostRepetitionsRefactored = (arr) => {
  const frequencyCounts = {};
  let maxFrequency = 0;

  for (const num of arr) {
    frequencyCounts[num] = (frequencyCounts[num] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, frequencyCounts[num]);
  }

  const integersWithMaxRepetitions = Object.keys(frequencyCounts)
    .filter((num) => frequencyCounts[num] === maxFrequency)
    .map((num) => +num);

  return integersWithMaxRepetitions;
};
