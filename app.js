App({
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
      hasLogin: false,
      localhost: 'http://192.168.31.69:9999',
      SelectNews: '/news/selectNewsMain',
      NewsDetail: '/news/detail',

      SelectAnnounce: '/announce/selectAnnounce',
      AnnounceDetail: '/announce/detail',

      SelectDayDuty : '/dayDuty/selectDayDuty',

      SelectCompetition: '/competition/selectCompetition',

      Attendance: '/attendance/addAttandence',

      
    },
    data: {
      openId: '',
      userId: '',
    }
   
});