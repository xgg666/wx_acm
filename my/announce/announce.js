// my/news/news.
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allNews: [],
    pageSize: 10,
    nowPage: 1,
    totalPage: 1,
    disload: '',
    disend: 'dispaly'
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
      url: app.globalData.localhost + app.globalData.SelectAnnounce,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        pageNum: num
      },
      success(res) {
        console.log(res.data);
        var tmp = [];
        for (var i = 0, l = res.data.resultBean.items.length; i < l; i++) {
          var s = res.data.resultBean.items[i].announceBody;
          res.data.resultBean.items[i].announceBody = s.replace(/<\/?[^>]*>/g, '').substring(0, 50)
          tmp.push(res.data.resultBean.items[i])
        }
        var all = self.data.allNews;
        all = all.concat(tmp);
        self.setData({ allNews: all })
        self.setData({ nowPage: res.data.resultBean.currentPage })
        self.setData({ totalPage: res.data.resultBean.totalPage })
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
    console.log('到底了');
    var self = this;
    if (self.data.nowPage == self.data.totalPage) {
      wx.showToast({
        title: '已经是最后一页了',
        icon: 'success',
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})