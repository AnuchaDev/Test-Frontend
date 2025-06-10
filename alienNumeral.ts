const alienNumeral = (s: string): number => {
  const values: Record<string, number> = {
    A: 1,
    B: 5,
    Z: 10,
    L: 50,
    C: 100,
    D: 500,
    R: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (!values[s[i]]) {
      throw new Error(`Invalid character detected: '${s[i]}'`);
    }
  }
  let numberTotal = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = values[s[i]];
    const nextValue = values[s[i + 1]];

    if (nextValue && currentValue < nextValue) {
      numberTotal -= currentValue;
    } else {
      numberTotal += currentValue;
    }
  }

  return numberTotal;
};
console.log(alienNumeral("AAABB"));
