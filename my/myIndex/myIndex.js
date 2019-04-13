// my/myIndex/myIndex.js

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:0,
    username:'',
    image:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({show: 1});
    wx.getUserInfo({
      success(ressx) {
        var userInfo = ressx.userInfo;
        console.log(userInfo)
        that.setData({ username: userInfo.nickName });
        that.setData({ image: userInfo.avatarUrl });
      }
    })
    wx.login({
      success(res) {
        console.log(res)
        console.log(res.code);

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
    console.log('yes')
    that.setData({ show: 1 })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var that = this;
    console.log('no')
    that.setData({ show: 0 })

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