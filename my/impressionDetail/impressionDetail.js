// my/newsDetail/newsDetail.js
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:'',
    username:'',
    impressionList:[],
    userId:'',
    color: [
      '#00BFFF', '#76EE00','#A8A8A8'
    ],
    impression:'',
    interestList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getUserImpression(options.num);
    that.interestImpression(options.num);
  },
  getUserImpression:function(num) {
    var that = this;
    console.log(num)
    wx.request({
      url: app.globalData.localhost + app.globalData.UserImpression,
      data: {
        userId: num
      },
      header: {
        'Authorization': app.data.userId,
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success(res) {
        if (res.data.code == 0) {
          console.log(res.data)
          that.setData({ image: res.data.resultBean.image });
          that.setData({ username: res.data.resultBean.username });
          that.setData({ userId: res.data.resultBean.userId });
          that.setData({ impressionList: res.data.resultBean.impressionList });
        }
        else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 3000
          })
        }
      }
    })
  },
  interestImpression: function (num) {
    var that = this;
    wx.request({
      url: app.globalData.localhost + app.globalData.InterestImpression,
      header: {
        'Authorization': app.data.userId,
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        userId: num
      },
      method: 'POST',
      success(res) {
        console.log(res);
        if (res.data.code == 0) {
          that.setData({ interestList: res.data.resultBean });
        }
        else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 3000
          })
        }
      }
    })
  },
  addImpression: function (e) {
    var that = this;
    console.log(e.detail.value);
    this.setData({
      impression: e.detail.value
    });
  }, 
  addImpressionBtn: function() {
    var that = this;
    console.log(that.data.impression.length)
    if (that.data.impression.length == 0 || that.data.impression.length>20) {
      wx.showToast({
        title: '印象长度不对',
        icon: 'none',
        duration: 3000
      })
    } else {
      wx.request({
        url: app.globalData.localhost + app.globalData.AddImpression,
        data: {
          userId: that.data.userId,
          impressionTitle: that.data.impression
        },
        header: {
          'Authorization': app.data.userId,
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success(res) {
          console.log(res);
          if (res.data.code == 0) {
            wx.showToast({
              title: '添加成功',
              icon: 'none',
              duration: 3000
            })
            console.log('---' + that.data.userId);
            that.setData({impression:''})
            that.getUserImpression(that.data.userId);
          }
          else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 3000
            })
          }
        }
      })
    }
    
  },
  agree:function(e) {
    var that = this;
    console.log(e.currentTarget.dataset.id);
    wx.request({
      url: app.globalData.localhost + app.globalData.AgreeImpression,
      data: {
        impressionId: e.currentTarget.dataset.id
      },
      header: {
        'Authorization': app.data.userId,
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success(res) {
        console.log(res);
        if (res.data.code == 0) {

          console.log('---' + that.data.userId);
          that.getUserImpression(that.data.userId);
        }
        else {
          wx.showToast({
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