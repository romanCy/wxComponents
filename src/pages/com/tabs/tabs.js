// pages/com/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    tabData:{
      list:['选项1','选项2','选项3','选项1','选项2','选项3','选项1','选项2','选项3'],
        scrollType:true,
        itemStart:'left'
    },
      VD:''
  
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
    newInput:function (e) {
        this.setData({
            VD:e.detail.value
        })
    },
    sChange:function (e) {
    console.log(e)
        this.setData({
            ['tabData.scrollType']:e.detail.value
        })
    },
    radioChange:function (e) {
        console.log(e)
        this.setData({
            ['tabData.itemStart']:e.detail.value
        })
    },
    sure:function () {
        this.data.tabData.list.push(this.data.VD);
        console.log(this.data.tabData.list)

        this.setData({
            ['tabData.list']:this.data.tabData.list
        })
    },
    deletei:function () {
        this.data.tabData.list.pop()

        this.setData({
            ['tabData.list']:this.data.tabData.list
        })
    }

})