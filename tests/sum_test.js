const sum = require('../sum')

test('Sum two given numbers', () => {
  expect(sum(3, 3)).toBe(6)
})