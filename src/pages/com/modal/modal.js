// pages/com/modal/modal.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        modalData: {
            isShow: true,
            title: "我是标题",
            msg: ['woshi1', 'woshi2','woshi2','woshi2'],
            cancel: '取消',
            sure:'sure'
        }

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
    showModal:function () {
        this.setData({
            ['modalData.isShow']:true
        })
    },
    sure:function () {
        console.log('sure')
    },
    cancel:function () {
        console.log('cancel')
    }
})