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
      CompetitionDetail: '/competition/detailCompetition',
      UserCompetition: '/competition/userCompetition',
      JoinCompetition: '/competition/joinCompetition',

      Attendance: '/attendance/addAttandence',

      ProgramRegister: '/program/register',
      
      GLogin: '/program/gLogin',
      GUid:'/program/getUId',

      GetIndexInfo: '/info/getIndexInfo',

      SelectUserImpression: '/impression/selectUserImpression',
      UserImpression: '/impression/userImpression',
      AddImpression:'/impression/addImpression',
      AgreeImpression: '/impression/agreeImpression',
      InterestImpression: '/impression/interestImpression',
    },
    data: {
      openId: '',
      userId: '',
    }
   
});