/**
 * Copyright © kacper.wang
 * http://jaywcjlove.github.io
 */
;(function(window){
	/**
	 * [format 日期格式化]
	 * @param  {[type]} format ["YYYY年MM月dd日hh小时mm分ss秒"]
	 * @return {[type]}        [string]
	 */
	Date.prototype.format = function(format){
		var timeFormat = {
			"M+" : this.getMonth()+1, //month
			"d+" : this.getDate(), //day
			"h+" : this.getHours(), //hour
			"m+" : this.getMinutes(), //minute
			"s+" : this.getSeconds(), //second
			"q+" : Math.floor((this.getMonth()+3)/3), //quarter
			"S" : this.getMilliseconds() //millisecond
		}
		if(/(y+)/.test(format))
			format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
		for(var k in timeFormat)
			if(new RegExp("("+ k +")").test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length==1 ? timeFormat[k] : ("00"+ timeFormat[k]).substr((""+ timeFormat[k]).length));
		return format;
	}
	/**
	 * [ago 多少小时前、多少分钟前、多少秒前]
	 * @return {[type]} [string]
	 */
	Date.prototype.ago = function(){
		if(!arguments.length) return '';
		var arg = arguments,
			now=this.getTime(),
			past =  !isNaN(arg[0])?arg[0]:new Date(arg[0]).getTime(),
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

		if(_year>=1) result=parseInt(_year) + "年前";
		else if(_month>=1) result=parseInt(_month) + "个月前";
		else if(_week>=1) result=parseInt(_week) + "周前";
		else if(_day>=1) result=parseInt(_day) +"天前";
		else if(_hour>=1) result=parseInt(_hour) +"个小时前";
		else if(_min>=1) result=parseInt(_min) +"分钟前";
		else result="刚刚";
		return result;
	}
	/**
	 * [TZC 解决因时区变更，导致显示服务器时间不准确 time Zone Converter]
	 * @param {[type]} timeZone [时区]
	 */
	Date.prototype.TZC = function(timeZone){
		var new_date = new Date(),
			old_date = this.getTime();
			return (isNaN(timeZone)&&!timeZone)? this : new Date(old_date + new_date.getTimezoneOffset() * 60 * 1000 + timeZone * 60 * 60 * 1000 );
	}
	/**
	 * [toHHMMSS 超过分钟以分钟为单位，超过小时以小时为单位]
	 * @param  {[type]} format ["123112".toHHMMSS('hh时mm分ss秒')]
	 * @return {[type]} [number]
	 */
	String.prototype.toHHMMSS = function(format) {
		var str = this.replace(/^\s\s*/, ''),hour, minute, second,timeFormat;
		if(!str.length&&str.length>0) return '';
		str = parseInt(str)

		hour = parseInt(str/3600)
		minute = parseInt(str/60)
		if(minute>=60) minute=minute%60
	    second = str % 60;
		timeFormat = {
			"h+":hour,
			"m+":minute,
			"s+":second
		}
		for(var k in timeFormat) {
			if(new RegExp("("+ k +")").test(format)) {
				if(RegExp.$1 == "hh"&&hour>99){
					format = format.replace('hh',hour)
				}else{
					format = format.replace(RegExp.$1, RegExp.$1.length==1 ? timeFormat[k] : ("00"+ timeFormat[k]).substr((""+ timeFormat[k]).length))
				}
			}
		};
  		return format
	}
})(window);
