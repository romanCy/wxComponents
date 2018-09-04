// components/rate/rate.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

    count:5,
    selectCount:0

  },
  _left:0,

  /**
   * 组件的方法列表
   */
  methods: {
    tm:function (e) {
      console.log(e)
      let clX=e.touches[0].clientX-this._left
      console.log(clX);
      console.log(clX/60)
      let self=this;
      self.setData({
        selectCount:clX/60
      })
    },
    tp:function (e) {
      let clX=e.touches[0].clientX-this._left
      console.log(typeof this._left);
      let self=this;
      self.setData({
        selectCount:clX/60
      })
    }
  },
  ready:function () {
    let self=this
    var query = wx.createSelectorQuery().in(this)
    query.select('#the-id').boundingClientRect(function(res){
      console.log(res)
      self._left=res.left
      console.log(this._left)
    }).exec()
  }
})
