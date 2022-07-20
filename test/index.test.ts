import '../src';

it('format test case', async () => {
  expect(new Date('2015-10-12 23:01:11').format("yyyy年MM月dd日 hh:mm:ss")).toEqual("2015年10月12日 23:01:11");
});


it('ago test case', async () => {
  expect(new Date(1421313395359).ago(1411430400000)).toEqual("3个月前");
  expect(new Date(1421313395359).ago('1987-04-03')).toEqual("28年前");
  expect(new Date('2010-02-02').ago('1987-04-03')).toEqual("23年前");
  expect(new Date('2010-02-02').ago()).toEqual("");
  expect(new Date('2010-02-02').ago('2010-02-01')).toEqual("1天前");
  expect(new Date('2010-02-02').ago('2010-02-02')).toEqual("刚刚");
  expect(new Date('2010-02-02 23:01:11').ago('2010-02-02 22:12:11')).toEqual("49分钟前");
  expect(new Date('2010-02-02 23:01:11').ago('2010-02-02 21:12:11')).toEqual("1个小时前");
  expect(new Date('2010-02-12').ago('2010-02-01')).toEqual("1周前");
});

it('toHHMMSS test case', async () => {
  expect(typeof (new Date(1421313395359).getTime()).toString().toHHMMSS('hh时mm分ss秒')).toEqual("string");
});

it('TZC test case', async () => {
  expect(typeof new Date(1434701732*1000).TZC(8)).toEqual("object");
  expect(new Date(1434701732*1000).TZC(8) instanceof Date).toBeTruthy();
});