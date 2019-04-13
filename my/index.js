
var app = getApp();

Page({
  data: {
    list: [
      {
        id: 'form',
        name: '新闻',
        url: 'news'
      },
      {
        id: 'widget',
        name: '公告',
        url: 'announce'
      },
      {
        id: 'feedback',
        name: '值日',
        url: 'dayDuty'
      },
      {
        id: 'competition',
        name: '校赛',
        url: 'competition'
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  click: function() {
    wx.request({
      url: app.globalData.localhost + app.globalData.Attendance,
      header: {
        'Authorization': app.data.userId, 
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 3000
        });
      }
    })
  },
  onLoad: function (options) {
    
  },
});
