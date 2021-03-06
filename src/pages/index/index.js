//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    toastData: {
      isShow: false
    }

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  },
  getUserInfo: function (e) {

  },
  timePicker: function () {
    console.log(app)
    wx.navigateTo({
      url: '/pages/com/timePicker/timePicker'
    })
  },
  leftSwiper: function () {
    wx.navigateTo({
      url: '../com/leftSwiper/leftSwiper'
    })
  },
  toast: function () {
    let self = this;
    console.log(1)
    app.showToast('wosho', self, 2000)
  },
  observerToast: function () {
    let self = this;
    self.setData({
      toastData: {
        isShow: true,
        delay: 2000,
        msg: '我是自定义组件'
      }
    })
  },
  goModal: function () {
    wx.navigateTo({
      url: '../com/modal/modal'
    })
  },
  goKeyoard: function () {
    wx.navigateTo({
      url: '../com/keyboard/keyboard'
    })
  },
  goupMenu: function () {
    wx.navigateTo({
      url: '../com/upMenu/upMenu'
    })
  },
  goTabs: function () {
    wx.navigateTo({
      url: '../com/tabs/tabs'
    })
  },
  goheadToast:function () {
    wx.navigateTo({
      url: '../com/headToast/headToast'
    })
  },
  goactiveSwiper:function () {
    wx.navigateTo({
      url: '../com/activeSwiper/activeSwiper'
    })
  },
  goRate:function () {
    wx.navigateTo({
      url: '../com/rate/rate'
    })
  },
  goNotice(){
    wx.navigateTo({
      url: '../com/noticeBar/noticeBar'
    })
  },
    timePicker:function () {
        wx.navigateTo({
          url: '../com/timePicker/timePicker'
        })
    }
})
