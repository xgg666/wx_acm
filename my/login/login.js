// my/login/login.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '正在登录',
      icon: 'loading',
      duration: 10000,
    })
    wx.login({
      success(res) {
        console.log(res)
        console.log(res.code);
        wx.request({
          url: 'http://192.168.31.69:9999/program/getUId',
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success(ress) {
            if (ress.data.code==0) {
              console.log(ress);
              app.data.openId = ress.data.resultBean;
              wx.request({
                url: 'http://192.168.31.69:9999/program/gLogin',
                data: {
                  unionid: ress.data.resultBean
                },
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                success(ressx) {
                  console.log(ressx);
                  if (ressx.data.code == 0) {
                    console.log(ressx);
                    console.log('登录成功');
                    app.data.userId = ressx.data.resultBean.token;
                    console.log(ressx.data.resultBean.token);
                    wx.switchTab({
                      url: '../tIndex'
                    })
                  }
                  else if (ressx.data.code==2) {
                    console.log('第一次登录，尚未注册');
                    wx.redirectTo({
                      url: '../register/register'
                    })
                  }
                  else {
                    wx.showToast({
                      title: ressx.data.msg,
                      icon: 'none',
                      duration: 2000
                    })
                  }


                }
              })
            
            }
          }
            
        })
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