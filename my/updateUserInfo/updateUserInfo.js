// my/updateUserInfo/updateUserInfo.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: 0,
    username: '',
    image: '',
    mobile: '',
    studentId: '',
    grade: '',
    classNum: '',
    realName: '',
    userId: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
  },

  getUserInfo: function () {
    var that = this;
    wx.request({
      url: app.globalData.localhost + app.globalData.GetUserInfo,
      data: {
      },
      header: {
        'Authorization': app.data.userId,
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success(res) {
        if (res.data.code == 0) {
          console.log(res.data)
          that.setData({ userId: res.data.resultBean.uId});
          that.setData({ username: res.data.resultBean.username });
          that.setData({ image: res.data.resultBean.image });
          that.setData({ mobile: res.data.resultBean.monile });
          that.setData({ studentId: res.data.resultBean.studentId });
          that.setData({ grade: res.data.resultBean.grade });
          that.setData({ classNum: res.data.resultBean.classNum });
          that.setData({ realName: res.data.resultBean.realname });
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
  updateMobile: function (e) {
    this.setData({
      mobile: e.detail.value
    });
  }, 
  updateStudentId: function (e) {
    this.setData({
      studentId: e.detail.value
    });
  }, 
  updateGrade: function (e) {
    this.setData({
      grade: e.detail.value
    });
  }, 
  updateClassNum: function (e) {
    this.setData({
      classNum: e.detail.value
    });
  }, 
  updateRealName: function (e) {
    this.setData({
      realName: e.detail.value
    });
  }, 
  showTopTips: function() {
    console.log(this.data.userId);
    console.log(this.data.mobile);
    console.log(this.data.studentId);
    console.log(this.data.grade);
    console.log(this.data.classNum);
    console.log(this.data.realName);
    this.updateUserInfo();
  },
  updateUserInfo: function () {
    var that = this;
    wx.request({
      url: app.globalData.localhost + app.globalData.UpdateUserInfo,
      data: {
        userId: this.data.userId,
        username: this.data.username,
        realname: this.data.realName,
        mobile: this.data.mobile,
        studentId: this.data.studentId,
        grade: this.data.grade,
        classNum: this.data.classNum
      },

      header: {
        'Authorization': app.data.userId,
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success(res) {
        if (res.data.code == 0) {
          console.log(res.data); 
          wx.showToast({
            title: '修改成功',
            icon: 'none',
            duration: 3000
          });
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