let valueA = [1, NaN, 0, -0, 1, true, false, "water"];
let valueB = [1, NaN, -0, 0, "1", false, false, "oil"];

export const strictEquals = (valueA, valueB) => {
  const Result = Object.is(valueA, valueB);

  if (isNaN(valueA) && !valueA) {
    if (isNaN(valueB) && !valueB) {
      return !Result;
    }
  }

  if (!isNaN(valueA) && !valueA) {
    if (!isNaN(valueB) && !valueB) {
      if (Object.is(valueA, valueB)) {
        return Result;
      }
      return !Result;
    }
  }
  return Result;
};

for (let i = 0; i < 8; i++) {
  console.log(
    `For the value A = ${valueA[i]} and B = ${
      valueB[i]
    } the result is ${strictEquals(valueA[i], valueB[i])}`
  );
}
