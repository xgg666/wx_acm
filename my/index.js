Page({
  data: {
    list: [
      {
        id: 'form',
        name: '新闻',
        url: 'news'
      },
      {
        id: 'widget',
        name: '公告',
        url: 'announce'
      },
      {
        id: 'feedback',
        name: '值日',
        url: 'dayDuty'
      },
      {
        id: 'competition',
        name: '校赛',
        url: 'competition'
      },
      {
        id: 'search',
        name: '搜索相关'
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
});
