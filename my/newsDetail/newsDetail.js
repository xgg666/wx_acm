// my/newsDetail/newsDetail.js
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsTitle:'',
    newsBody:'',
    newsClass:'',
    createDate:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.num)
    wx.request({
      url: app.globalData.localhost + app.globalData.NewsDetail,
      data: {
        newsId: options.num
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success(res) {
        console.log(res.data)
        that.setData({ newsTitle: res.data.resultBean.newsTitle });
        that.setData({ createDate: res.data.resultBean.createDate });
        //that.setData({ newsBody: res.data.resultBean.newsBody });
        WxParse.wxParse('newsBody', 'html', res.data.resultBean.newsBody, that, 5);
        var classfi='';
        for (var i = 0; i < res.data.resultBean.classifications.length; i++) {
          if (i!=0) {
            classfi = classfi+','
          }
          classfi = classfi + res.data.resultBean.classifications[i].className;
        }
        that.setData({ newsClass: classfi});
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