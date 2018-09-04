// components/headToast/headToast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    toastData:{
      type:Object,
      value:{},
      observer:function (newVal) {

        let self=this;

        if(self.data.isShow&&newVal.isShow){
          return false
        }

        setTimeout(function () {
          self.setData({
            isShow:self.data.toastData.isShow
          });
        },300)

        if(!self.data.toastData.isShow){
          return false;
        }

        setTimeout(function () {
          self.setData({
            ['toastData.isShow']:false
          })
        },self.data.toastData.delay)
        
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow:false

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
