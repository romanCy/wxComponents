// components/activeSwiper/activeSwiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
    swiperData:{
      type:Object,
      value:{},
      observer:function () {
        
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindchange(e) {
      this.setData({
        swiperIndex: e.detail.current
      })
    }

  }
})
