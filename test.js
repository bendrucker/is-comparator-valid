'use strict'

var test = require('tape')
var Comparator = require('semver').Comparator
var isValid = require('./')

test(function (t) {
  t.ok(isValid(new Comparator('>=2.0.0')))
  t.ok(isValid(new Comparator('<2.0.0')))
  t.ok(isValid(new Comparator('>0.0.0')))
  t.ok(isValid(new Comparator('0.0.0')))
  t.notOk(isValid(new Comparator('<0.0.0')))

  t.end()
})
