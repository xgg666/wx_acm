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
      localhost: 'http://localhost:9999',
      SelectNews: '/news/selectNewsMain',
      NewsDetail: '/news/detail',

      SelectAnnounce: '/announce/selectAnnounce',
      AnnounceDetail: '/announce/detail',

      SelectDayDuty : '/dayDuty/selectDayDuty',

      SelectCompetition: '/competition/selectCompetition',
      CompetitionDetail: '/competition/detailCompetitionWithUser',
      UserCompetition: '/competition/userCompetition',
      JoinCompetition: '/competition/joinCompetition',
      QuitCompetition: '/competition/quitCompetition',

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
      GetUserInfo: '/userLogin/getUserInfo',
      UpdateUserInfo:'/userLogin/updateUserInfo/',
    },
    data: {
      openId: '',
      userId: '',
    }
   
});