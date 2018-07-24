var app = getApp()
Page({
    data: {
      leftSwiperData:{
          items: []
      }


    },
    onLoad: function () {
        for (var i = 0; i < 10; i++) {
            this.data.leftSwiperData.items.push({
                content: i + " 向左滑动删除",
                isTouchMove: false //默认全隐藏删除
            })
        }
        this.setData({
            ['leftSwiperData.items']: this.data.leftSwiperData.items
        })
    },

})