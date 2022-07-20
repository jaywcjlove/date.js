interface Date {
  /**
   * [format 日期格式化]
   * @param  {[type]} format ["YYYY年MM月dd日hh小时mm分ss秒"]
   * @return {[type]}        [string]
   */
  format(format: string): string;
  /**
   * [ago 多少小时前、多少分钟前、多少秒前]
   * @return {[type]} [string]
   */
  ago(format?: string | number): string;
  /**
   * [TZC 解决因时区变更，导致显示服务器时间不准确 time Zone Converter]
   * @param {[type]} timeZone [时区]
   */
  TZC(timeZone: number): Date;
}

interface String {
  /**
   * [toHHMMSS 超过分钟以分钟为单位，超过小时以小时为单位]
   * @param  {[type]} format ["123112".toHHMMSS('hh时mm分ss秒')]
   * @return {[type]} [number]
   */
  toHHMMSS(format: string): string;
}

Date.prototype.format = function(format){
  const timeFormat = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(), //day
    "h+" : this.getHours(), //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3), //quarter
    "S" : this.getMilliseconds() //millisecond
  }
  if(/(y+)/.test(format))
    format = format.replace(RegExp.$1, (this.getFullYear()+"").substring(4 - RegExp.$1.length));

  for(const k in timeFormat) {
    if(new RegExp("("+ k +")").test(format)) {
      const str = timeFormat[k as keyof typeof timeFormat] as unknown as string;
      format = format.replace(RegExp.$1, RegExp.$1.length==1 ? str : ("00"+ str).substring((""+ str).length));
    }
  }
  return format;
}
Date.prototype.ago = function(format) {
  if(!format) return '';
  let now=this.getTime(),
    past = typeof format === 'number' && !isNaN(format) ? format : new Date(format).getTime(),
    diffValue = now - past,
    result='',
    minute = 1000 * 60,
    hour = minute * 60,
    day = hour * 24,
    halfamonth = day * 15,
    month = day * 30,
    year = month * 12,

    _year = diffValue/year,
    _month =diffValue/month,
    _week =diffValue/(7*day),
    _day =diffValue/day,
    _hour =diffValue/hour,
    _min =diffValue/minute;

  if(_year >= 1) result=parseInt(_year.toString()) + "年前";
  else if(_month >= 1) result=parseInt(_month.toString()) + "个月前";
  else if(_week >= 1) result=parseInt(_week.toString()) + "周前";
  else if(_day >= 1) result=parseInt(_day.toString()) + "天前";
  else if(_hour >= 1) result=parseInt(_hour.toString()) + "个小时前";
  else if(_min >= 1) result=parseInt(_min.toString()) + "分钟前";
  else result="刚刚";
  return result;
}
Date.prototype.TZC = function(timeZone) {
  const new_date = new Date(),
    old_date = this.getTime();
    return (isNaN(timeZone)&&!timeZone)? this : new Date(old_date + new_date.getTimezoneOffset() * 60 * 1000 + timeZone * 60 * 60 * 1000);
}
String.prototype.toHHMMSS = function(format) {
  let hour, minute, second, timeFormat;
  const str = parseInt(this.trim())
  hour = parseInt((str/3600).toString())
  minute = parseInt((str/60).toString())
  if(minute>=60) minute=minute%60
    second = str % 60;
  timeFormat = {
    "h+":hour,
    "m+":minute,
    "s+":second
  }
  for(let k in timeFormat) {
    if(new RegExp("("+ k +")").test(format)) {
      if(RegExp.$1 == "hh" && hour > 99){
        format = format.replace('hh', hour.toString())
      } else {
        const str = timeFormat[k as keyof typeof timeFormat] as unknown as string;
        format = format.replace(RegExp.$1, RegExp.$1.length==1 ? str : ("00"+ str).substring((""+ str).length))
      }
    }
  };
  return format
}