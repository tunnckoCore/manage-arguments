# manage-arguments [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url]

> Prevents arguments leakage - managing arguments. See [Optimization killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments) by [@petkaantonov](https://github.com/petkaantonov).

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i manage-arguments --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var manageArguments = require('manage-arguments')

function fixture () {
  return manageArguments(arguments)
}

console.log(fixture(1, 2, 3, {foo: 'bar'}))
//=> [ 1, 2, 3, { foo: 'bar' } ]
```


## See also
- [bluebird](https://github.com/petkaantonov/bluebird): Full featured Promises/A+ implementation with exceptionally good performance
- [handle-arguments](https://github.com/hybridables/handle-arguments#readme): Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as… [more](https://github.com/hybridables/handle-arguments#readme)
- [handle-callback](https://github.com/hybridables/handle-callback): Initial step for creating hybrid APIs, used by `hybridify`. Handle callback in promise - give… [more](https://github.com/hybridables/handle-callback)
- [hybridify](https://github.com/hybridables/hybridify#readme): Building hybrid APIs. You can use both callback and promise in same time.  Like… [more](https://github.com/hybridables/hybridify#readme)
- [Optimization killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments) by [@petkaantonov](https://github.com/petkaantonov)


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/manage-arguments/issues/new).
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/manage-arguments
[npmjs-img]: https://img.shields.io/npm/v/manage-arguments.svg?label=manage-arguments

[license-url]: https://github.com/tunnckoCore/manage-arguments/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/manage-arguments
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/manage-arguments.svg

[travis-url]: https://travis-ci.org/tunnckoCore/manage-arguments
[travis-img]: https://img.shields.io/travis/tunnckoCore/manage-arguments.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/manage-arguments
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/manage-arguments.svg

[david-url]: https://david-dm.org/tunnckoCore/manage-arguments
[david-img]: https://img.shields.io/david/tunnckoCore/manage-arguments.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
