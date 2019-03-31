// my/newsDetail/newsDetail.js
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    body: '',
    createDate: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.num)
    wx.request({
      url: app.globalData.localhost + app.globalData.AnnounceDetail,
      data: {
        announceId: options.num
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success(res) {
        if (res.data.code==0) {
          console.log(res.data)
          that.setData({ title: res.data.resultBean.announceTitle });
          that.setData({ createDate: res.data.resultBean.announceCreateTime });
          //that.setData({ newsBody: res.data.resultBean.newsBody });
          WxParse.wxParse('body', 'html', res.data.resultBean.announceBody, that, 5);
        }
        else {
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