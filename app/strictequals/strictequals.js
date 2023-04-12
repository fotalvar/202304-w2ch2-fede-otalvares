let valueA = [1, NaN, 0, -0, 1, true, false, "water", "Fede"];
let valueB = [1, NaN, -0, 0, "1", false, false, "oil", "Fede"];

export const strictEquals = (valueA, valueB) => {
  const result = Object.is(valueA, valueB);

  if (isNaN(valueA) && !valueA && isNaN(valueB) && !valueB) {
    return !result;
  }

  if (!isNaN(valueA) && !valueA && !isNaN(valueB) && !valueB) {
    if (Object.is(valueA, valueB)) {
      return result;
    }
    return !result;
  }
  return result;
};

const result = () => {
  for (let i = 0; i < valueA.length; i++) {
    console.log(
      `For the value A = ${valueA[i]} and B = ${
        valueB[i]
      } the result is ${strictEquals(valueA[i], valueB[i])}`
    );
  }
};

result();
