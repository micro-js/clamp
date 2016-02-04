
# clamp

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Clamp a number between two values

## Installation

    $ npm install @f/clamp

## Usage

```js
var clamp = require('@f/clamp')

clamp(1, 2, 3) === 2
clamp(3, 1, 2) === 2
clamp(2, 1, 3) === 2
```

## API

### clamp(n, min, max)

- `n` - The number to be clamped
- `min` - The minimum value
- `max` - The maximum value

**Returns:** If n is between min and max, returns n. If n is greater than max, returns max. If n is less than min, returns min.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/clamp.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/clamp
[git-image]: https://img.shields.io/github/tag/micro-js/clamp.svg
[git-url]: https://github.com/micro-js/clamp
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/clamp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/clamp
