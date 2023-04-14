const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('returns an array', () => {
    const input = [1, 2, 3]
    const output = shuffle(input)
    expect(Array.isArray(output)).toBe(true)
  })

  test('returns an array of the same length as the input', () => {
    const input = [1, 2, 3]
    const output = shuffle(input)
    expect(output.length).toBe(input.length)
  })
});

