Date Extension
===

[![Stargazers](https://img.shields.io/github/stars/jaywcjlove/date.js.svg)](https://github.com/jaywcjlove/date.js/stargazers) 
[![Releases](https://img.shields.io/github/release/jaywcjlove/date.js.svg)](https://github.com/jaywcjlove/date.js/releases)
[![CI](https://github.com/jaywcjlove/date.js/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/date.js/actions/workflows/ci.yml)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@wcj/date/file/README.md)
[![npm version](https://img.shields.io/npm/v/@wcj/date.svg)](https://www.npmjs.com/package/@wcj/date)
[![Coverage Status](https://jaywcjlove.github.io/date.js/badges.svg)](https://jaywcjlove.github.io/date.js/lcov-report/)

JavaScript function for converting timestamps or Date objects to formatted strings, manipulate dates.

## Installation

```bash
npm install @wcj/date
```

## Usage

```js
import '@wcj/date';

new Date('2015-10-12 23:01:11').format("yyyy年MM月dd日 hh:mm:ss");
//⇒ "2015年10月12日 23:01:11"
```

## API

### format

> format time

```js
new Date('2015-10-12 23:01:11').format("yyyy年MM月dd日 hh:mm:ss");
//⇒ "2015年10月12日 23:01:11"

var testDate = new Date(); 
var testStr = testDate.format("yyyy年MM月dd日hh小时mm分ss秒"); 
//=> testStr =  2015年01月20日 19小时21分03秒
```

### ago

> How many hours ago, how many minutes ago, how many seconds ago

```js
new Date(1421313395359).ago(1411430400000)
//=> "3个月前"

new Date(1421313395359).ago('1987-04-03')
//=> "28年前"

new Date('2010-02-02').ago('1987-04-03')
//=> "23年前"
```

### toHHMMSS

> Time conversion, countdown 'milliseconds'.toHHMMSS(output format)
> This is an extension based on the String prototype

```js
var dt = (new Date().getTime()).toString()
dt.toHHMMSS('hh时mm分ss秒') //=> 34时11分52秒
```

### TZC

> Solve the inaccurate display of server time due to time zone changes

```js
// The server's incoming front-end is generally seconds, and the front-end timestamp is milliseconds, so it needs to be multiplied by 1000
// 8 is the server time time zone
new Date(1434701732*1000).TZC(8)
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/date.js/graphs/contributors">
  <img src="https://jaywcjlove.github.io/date.js/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

MIT © [Kenny Wong](https://github.com/jaywcjlove)