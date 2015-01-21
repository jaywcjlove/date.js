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

