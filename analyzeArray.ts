interface Analysis {
  average: number;
  min: number;
  max: number;
  length: number;
}

const analyzeArray = (arr: (number | undefined)[]): Analysis => {
  const result = {
    average: 0,
    min: arr.at(0) ?? 0,
    max: arr.at(0) ?? 0,
    length: arr.length,
  };
  
  arr.forEach((v) => {
    result.average += v ?? 0;
    result.min = Math.min(result.min, v ?? result.min);
    result.max = Math.max(result.max, v ?? result.max);
  });

  // Handling 0/0 for empty array
  result.average = result.average / arr.length || 0;

  return Object.freeze(result);
};

export default analyzeArray;
