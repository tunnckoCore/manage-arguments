/*!
 * manage-arguments <https://github.com/tunnckoCore/manage-arguments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var manageArguments = require('./index')

test('manage-arguments:', function () {
  test('should transform Arguments object to array', function (done) {
    function fixture () {
      return manageArguments(arguments)
    }

    var args = fixture(1, 2, 3, {foo: 'bar'})

    test.deepEqual(args, [1, 2, 3, {foo: 'bar'}])
    done()
  })
  test('should throw error', function () {
    test('when Object is given - manageArguments({name: 123})', function (done) {
      function fixture () {
        manageArguments({name: 123})
      }
      test.throws(fixture, /expect only Arguments object/)
      done()
    })
    test('when no params is given - manageArguments()', function (done) {
      function fixture () {
        manageArguments()
      }
      test.throws(fixture, /expect only Arguments object/)
      done()
    })
    test('when Number is given - manageArguments(123)', function (done) {
      function fixture () {
        manageArguments(123)
      }
      test.throws(fixture, /expect only Arguments object/)
      done()
    })
    test('when Array is given - manageArguments([1,2,3])', function (done) {
      function fixture () {
        manageArguments([1, 2, 3])
      }
      test.throws(fixture, /expect only Arguments object/)
      done()
    })
    test('when String is given - manageArguments("123")', function (done) {
      function fixture () {
        manageArguments('123')
      }
      test.throws(fixture, /expect only Arguments object/)
      done()
    })
  })
})
