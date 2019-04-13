// my/register/register.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year:[],
    phone:'',
    studentId:'',
    realName:'',
    date:'',
  },
  bindDateChange: function (e) {
    var that = this;
    console.log(e.detail.value);
    this.setData({
      date: that.data.year[e.detail.value]
    })
    console.log(that.data.year[e.detail.value])
  },
  phoneChange: function (e) {
    var that = this;
    console.log(e.detail.value);
    this.setData({
      phone: e.detail.value
    })
  }, 
  studentChange: function (e) {
    var that = this;
    console.log(e.detail.value);
    this.setData({
      studentId: e.detail.value
    })
  },
  realNameChange: function (e) {
    var that = this;
    console.log(e.detail.value);
    this.setData({
      realName: e.detail.value
    })
  },
  onClick: function() {
    var that = this;
    console.log(that.data.phone);
    console.log(that.data.studentId);
    console.log(that.data.date);
    if (!(/^1[34578]\d{9}$/.test(that.data.phone))) {
      wx.showToast({
        title: '手机号有误',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if(that.data.studentId=='') {
      wx.showToast({
        title: '学号不能为空',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (that.data.date == '') {
      wx.showToast({
        title: '入学年份不能为空',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    var userInfo;
    wx.getUserInfo({
      success(ressx) {
        userInfo = ressx.userInfo;
        console.log(userInfo)
        var code;
        wx.login({
          success(res) {
            console.log(res)
            wx.request({
              url: 'http://192.168.31.69:9999/program/getUId',
              data: {
                code: res.code
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
              },
              success(ress) {
                console.log(ress)
                code = ress.data.resultBean
                wx.request({
                  url: app.globalData.localhost + app.globalData.ProgramRegister,
                  method: 'POST',
                  data: {
                    unionid: code,
                    mobile: that.data.phone,
                    username: userInfo.nickName,
                    grade: that.data.date,
                    studentId: that.data.studentId,
                    image: userInfo.avatarUrl,
                    realName: that.data.realName
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                  },
                  success(ress) {
                    if (ress.data.code == 0 || ress.data.code == 2) {
                      wx.redirectTo({
                        url: '../index',
                      })
                    } else {
                      wx.showToast({
                        title: ress.data.msg,
                        icon: 'none',
                        duration: 2000
                      })
                      app.data.userId = ress.data.resultBean.token;
                    }

                  }
                })
              }
            })
            
          }
        })
        
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var num = [];
    for(var i = 1999; i<=2100; i++) {
      num.push(i);
    }
    that.setData({ year: num})
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