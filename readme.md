# is-comparator-valid [![Build Status](https://travis-ci.org/bendrucker/is-comparator-valid.svg?branch=master)](https://travis-ci.org/bendrucker/is-comparator-valid)

> Check if a semver comparator is valid


## Install

```
$ npm install --save is-comparator-valid
```

## Usage

```js
var isValid = require('is-comparator-valid')
var Comparator = require('semver').Comparator
isValid(new Comparator('<2')) // => true
isValid(new Comparator('>0.0.0')) // => true
isValid(new Comparator('<0.0.0')) // => false
```

## API

#### `isValid(comparator)` -> `boolean`

##### comparator

*Required*  
Type: `comparator`

A `semver.Comparator` to test.

## License

MIT © [Ben Drucker](http://bendrucker.me)
