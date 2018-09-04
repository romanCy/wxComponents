// components/upMenu/upMenu.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        upmenuData: {
            type: Object,
            value: {},
            observer: function () {
                let self=this;
                if(!self.data.upmenuData.isShow){
                    setTimeout(function () {
                        self.setData({
                            isShow:self.data.upmenuData.isShow
                        })
                    },300)
                }else {
                    self.setData({
                        isShow:self.data.upmenuData.isShow
                    })
                }

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
        cancel:function () {
            let self=this;
            self.setData({
                ['upmenuData.isShow']:false
            })
        },
        _tap:function (e) {
            let self=this;
            self.setData({
                ['upmenuData.isShow']:false
            })
            this.triggerEvent(e.currentTarget.dataset.id)
        },
        nofn:function () {
            
        }
    }
})
