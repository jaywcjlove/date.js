# date 时间操作

[![](https://img.shields.io/github/issues/jaywcjlove/date.js.svg)](https://github.com/jaywcjlove/date.js/issues) [![](https://img.shields.io/github/forks/jaywcjlove/date.js.svg)](https://github.com/jaywcjlove/date.js/network) [![](https://img.shields.io/github/stars/jaywcjlove/date.js.svg)](https://github.com/jaywcjlove/date.js/stargazers) [![](https://img.shields.io/github/release/jaywcjlove/date.js.svg)](https://github.com/jaywcjlove/date.js/releases)

## format

> 格式化时间

```js
new Date('2015-10-12 23:01:11').format("yyyy年MM月dd日 hh:mm:ss");
//⇒ "2015年10月12日 23:01:11"

var testDate = new Date(); 
var testStr = testDate.format("yyyy年MM月dd日hh小时mm分ss秒"); 
//=> testStr =  2015年01月20日 19小时21分03秒
```


### ago

> 多少小时前、多少分钟前、多少秒前

```js
new Date(1421313395359).ago(1411430400000)
//=> "3个月前"

new Date(1421313395359).ago('1987-04-03')
//=> "28年前"

new Date('2010-02-02').ago('1987-04-03')
//=> "23年前"
```

### toHHMMSS

> 时间转换,倒计时  '毫秒'.toHHMMSS(输出格式)
> 这个是基于 String 原型扩展出来的

```js
var dt = (new Date().getTime()).toString()
dt.toHHMMSS('hh时mm分ss秒') //=> 34时11分52秒
```

### TZC

> 解决因时区变更，导致显示服务器时间不准确


```js
//服务端传入前端一般为秒，前端时间戳为毫秒所以要乘以1000
//8 为服务器时间时区
new Date(1434701732*1000).TZC(8)
```
