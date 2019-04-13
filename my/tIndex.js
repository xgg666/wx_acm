// my/tIndex.js

var app = getApp();
Page({

  data: {
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    inputShowed: false,
    inputVal: "",
    dayUser:'',
    grids: [0, 1, 2, 3],
    list: [
      {
        id: 'news.png',
        name: '新闻',
        url: './news/news'
      },
      {
        id: 'announce.png',
        name: '公告',
        url: './announce/announce'
      },
      {
        id: 'day.png',
        name: '值日',
        url: './dayDuty/dayDuty'
      },
      {
        id: 'competition.png',
        name: '校赛',
        url: './competition/competition'
      }
    ]
  },
  onLoad: function (options) {
    //navbar
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    //
    this.getInfo();
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  getInfo: function() {
    var that = this;
    wx.request({
      url: app.globalData.localhost + app.globalData.GetIndexInfo,
      header: {
        'Authorization': app.data.userId,
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(res);
        if (res.data.code == 0) {
          that.setData({ dayUser: res.data.resultBean.nowDuty });
        } else {
          ws.showToast({
            title: '获取值日生失败',
            icon: 'none',
            duration: 3000
          })
        }
      }
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }, 
  click: function () {
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
})