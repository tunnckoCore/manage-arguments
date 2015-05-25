/*!
 * manage-arguments <https://github.com/tunnckoCore/manage-arguments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var isArguments = require('is-arguments')

module.exports = function manageArguments (argsObject) {
  if (!isArguments(argsObject)) {
    throw new TypeError('manage-arguments: expect only Arguments object')
  }
  var i = argsObject.length
  var args = new Array(i)
  while (i--) {
    args[i] = argsObject[i]
  }
  return args
}
