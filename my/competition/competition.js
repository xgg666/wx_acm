// my/news/news.
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
    disend: 'dispaly'
  },

  before : function() {
    var self = this;
    if (self.data.nowPage==1) {
      wx.showToast({
        title: '已经是第一页了',
        icon: 'none',
        duration: 3000
      });
      return;
    }
    var num = self.data.nowPage-1;
    self.setData({nowPage: num});
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
    console.log(self.data)
    wx.request({
      url: app.globalData.localhost + app.globalData.SelectCompetition,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        pageNum: num,
        pageSize: self.data.pageSize
      },
      success(res) {
        if (res.data.code==0) {
          console.log(res.data);

          self.setData({ all: res.data.resultBean.items })
          self.setData({ nowPage: res.data.resultBean.currentPage })
          self.setData({ totalPage: res.data.resultBean.totalPage })
        }
        else {
          wx.showToast({
            title: res.data.msg,
            icon: 'nonenone',
            duration: 3000
          });
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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
    

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})