// components/modal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modalData:{
      type:Object,
        value:{

      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      nofn:function () {
          
      },
      cancel:function () {
          this.setData({
              ['modalData.isShow']:false
          })
          this.triggerEvent('cancel');
      },
      sure:function () {
          this.setData({
              ['modalData.isShow']:false
          })
          this.triggerEvent('sure');
      },
      close:function () {
          this.setData({
              ['modalData.isShow']:false
          })
      }
  }
})
