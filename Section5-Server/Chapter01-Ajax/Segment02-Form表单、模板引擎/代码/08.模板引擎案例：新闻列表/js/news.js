$(function () {
  // 给时间补零的函数
  function padZero(n) {
    if (n < 10) {
      return '0' + n
    } else {
      return n
    }
  }

  // 定义格式化时间的过滤器
  template.defaults.imports.dateFormat = function (dtStr) {
    var dt = new Date(dtStr)

    var y = dt.getFullYear()
    var m = padZero(dt.getMonth() + 1)
    var d = padZero(dt.getDate())

    var hh = padZero(dt.getHours())
    var mm = padZero(dt.getMinutes())
    var ss = padZero(dt.getSeconds())

    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
  }

  // 获取新闻列表的函数
  function getNewsList() {
    $.get('http://www.liulongbin.top:3006/api/news', function (res) {
      if (res.status !== 200) {
        return alert('获取新闻列表数据失败！')
      }
      for (var i = 0; i < res.data.length; i++) {
        // 把每一项的 tags 属性，从字符串改造成字符串的数组
        res.data[i].tags = res.data[i].tags.split(',')
      }
      console.log(res)
      var htmlStr = template('tpl-news', res)
      $('#news-list').html(htmlStr)
    })
  }

  getNewsList()

})
