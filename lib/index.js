/**
 * Expose clamp
 */

module.exports = clamp

/**
 * clamp
 */

function clamp (n, min, max) {
  return n <= min
    ? min
    : n >= max ? max : n
}
