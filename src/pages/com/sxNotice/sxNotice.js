// pages/com/sxNotice/sxNotice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  go(){
    let self=this;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
    })
    

let timer=null
    animation = wx.createAnimation({
      duration: 5000,
      timingFunction: 'linear',
    })
    self.animation = animation
    self.animation.top(-100).step()
    self.setData({
      animationData: animation.export()
    })
    timer = setTimeout(function () {
      animation = wx.createAnimation({
        duration: 0,
        timingFunction: 'linear',
      })
      self.animation = animation
      self.animation.top(0).step()
      self.setData({
        animationData: animation.export()
      })
    }, 5000)
    setInterval(function(){
      clearTimeout(timer)
      animation = wx.createAnimation({
        duration: 5000,
        timingFunction: 'linear',
      })
      self.animation = animation
      self.animation.top(-100).step()
      self.setData({
        animationData: animation.export()
      })
      timer=setTimeout(function () {
        animation = wx.createAnimation({
          duration: 0,
          timingFunction: 'linear',
        })
        self.animation = animation
        self.animation.top(0).step()
        self.setData({
          animationData: animation.export()
        })
      }, 5000)
    },5050)
    
    
    




   
   
    this.animation.top(-100).step()
    this.setData({
      animationData: animation.export()
    })
    setTimeout(function(){
      animation = wx.createAnimation({
        duration: 0,
        timingFunction: 'linear',
      })
      self.animation = animation
      self.animation.top(0).step()
      this.setData({
        animationData: animation.export()
      })
    },1000)
  }
})