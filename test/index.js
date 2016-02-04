/**
 * Imports
 */

var clamp = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(clamp(1, 2, 3), 2)
  t.equal(clamp(3, 1, 2), 2)
  t.equal(clamp(2, 1, 3), 2)
  t.end()
})
