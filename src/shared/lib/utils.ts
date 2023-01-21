function getNumeral(val: number, variants: string[]) {
  let n = Math.abs(val)

  n %= 100

  if (n >= 5 && n <= 20) {
    return `${val} ${variants[2]}`;
  }

  n %= 10

  if (n === 1) {
    return `${val} ${variants[0]}`;
  } else if (n >= 2 && n <= 4) {
    return `${val} ${variants[1]}`;
  }

  return `${val} ${variants[2]}`;
}

export { getNumeral };