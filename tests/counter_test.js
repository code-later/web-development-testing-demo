const countWords = (input) => {
  const wordsByNumber = input
    .split(/\W/)
    .reduce((acc, word) => {
      if (word.trim() !== '') {
        const count = (acc[word.toLowerCase()] || 0) + 1
        acc[word.toLowerCase()] = count
      }

      return acc
    }, {})

  return Object.entries(wordsByNumber).map((wordWithCount) => {
    return {
      'word': wordWithCount[0],
      'count': wordWithCount[1]
    }
  }).sort((a, b) => {
    return b.count - a.count
  })
}

test('Sort output descending', () => {
  const input = 'One two, three, three, three'

  expect(countWords(input)).toEqual([
    { 'word': 'three', 'count': 3 },
    { 'word': 'one', 'count': 1 },
    { 'word': 'two', 'count': 1 }
  ])
})

test('Count words in String', () => {
  const input = 'No, no,no, I kill the bus driver!'

  expect(countWords(input)).toEqual({
    'no': 3,
    'i': 1,
    'kill': 1,
    'the': 1,
    'bus': 1,
    'driver': 1
  })
})

test('Ignore case while counting', () => {
  const input = 'No, no, no'

  expect(countWords(input)).toEqual({
    'no': 3
  })
})
