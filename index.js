'use strict'

var semver = require('semver')

module.exports = function isComparatorValid (comparator) {
  return semver.gt(comparator.semver.toString(), '0.0.0') ||
    ~comparator.operator.indexOf('>') ||
    (comparator.semver.version === '0.0.0' && !comparator.operator)
}
