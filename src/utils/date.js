// 时间多久格式化

export const timeago = function(t) {
  console.log('t',t, new Date())
  const timestamp = + new Date(t)/1000
  let minutes, hours, days, seconds, mouth, year
  const timeNow = parseInt(new Date().getTime() / 1000)
  console.log('timestamp timeNow',timestamp,timeNow)

  seconds = timeNow - timestamp
  if (seconds > 86400 * 30 * 12) {
    year = parseInt(seconds / (86400 * 30 * 12))
  } else {
    year = 0
  }
  if (seconds > 86400 * 30) {
    mouth = parseInt(seconds / (86400 * 30))
  } else {
    mouth = 0
  }
  if (seconds > 86400) {
    days = parseInt(seconds / 86400)
  } else {
    days = 0
  }
  if (seconds > 3600) {
    hours = parseInt(seconds / 3600)
  } else {
    hours = 0
  }
  minutes = parseInt(seconds / 60)
  if (year > 0) {
    return year + '年前'
  } else if (mouth > 0 && year <= 0) {
    return mouth + '月前'
  } else if (days > 0 && mouth <= 0) {
    return days + '天前'
  } else if (days <= 0 && hours > 0) {
    return hours + '小时前'
  } else if (hours <= 0 && minutes > 0) {
    return minutes + '分钟前'
  } else if (minutes <= 0 && seconds > 0) {
    if (seconds < 30) {
      return '刚刚'
    } else {
      return seconds + '秒前'
    }
  } else {
    return '刚刚'
  }
}
