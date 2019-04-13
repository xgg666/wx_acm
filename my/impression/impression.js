
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    all: [],
    pageSize: 10,
    nowPage: 1,
    totalPage: 1,
    disload: '',
    disend: 'dispaly',
    inputShowed: false,
    inputVal: "",
    show:0,
  },

  before: function () {
    var self = this;
    if (self.data.nowPage == 1) {
      wx.showToast({
        title: '已经是第一页了',
        icon: 'none',
        duration: 3000
      });
      return;
    }
    var num = self.data.nowPage - 1;
    self.setData({ nowPage: num });
    self.getNews(num);
  },
  after: function () {
    var self = this;
    if (self.data.nowPage == self.data.totalPage) {
      wx.showToast({
        title: '已经是最后一页了',
        icon: 'none',
        duration: 3000
      });
      return;
    }
    var num = self.data.nowPage + 1;
    self.setData({ nowPage: num });
    self.getNews(num);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    self.getNews(self.data.nowPage);
  },

  getNews: function (num) {
    var self = this;
    console.log(self.data.inputVal)
    wx.request({
      url: app.globalData.localhost + app.globalData.SelectUserImpression,
      header: {
        'Authorization': app.data.userId,
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        pageNum: num,
        username: self.data.inputVal
      },
      success(res) {
        if (res.data.code == 0) {
          console.log(res.data);
          var tmp = [];
          for (var i = 0, l = res.data.resultBean.items.length; i < l; i++) {
            tmp.push(res.data.resultBean.items[i])
          }
          var all = self.data.all;
          all = all.concat(tmp);
          self.setData({ all: all })
          self.setData({ nowPage: res.data.resultBean.currentPage })
          self.setData({ totalPage: res.data.resultBean.totalPage })
        } else {
          ws.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 3000
          })
        }

      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    that.setData({show:1});
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var that = this;
    that.setData({ show: 0 });

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('到底了');
    var self = this;
    if (self.data.nowPage == self.data.totalPage) {
      wx.showToast({
        title: '已经是最后一页了',
        icon: 'none',
        duration: 3000
      });
      self.setData({ disload: 'dispaly' });
      self.setData({ disend: '' });
    } else {
      var tmp = self.data.nowPage;
      this.setData({ nowPage: tmp + 1 });
      self.getNews(tmp + 1);
    }

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
    that.setData({ nowPage: 1 });
    that.setData({ all: [] });
    that.getNews(1);
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
    var that = this;
    that.setData({nowPage: 1});
    that.setData({all:[]});
    that.getNews(1);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})