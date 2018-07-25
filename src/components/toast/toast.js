// components/toast/toast.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        toastData: {
            type: Object,
            value: {},
            observer: '_hideToast'
        }

    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        _hideToast:function () {
            let self=this;
            if(self.data.toastData.isShow==false){
                return false;
            }
            console.log(this.data.toastData);
            setTimeout(function () {
                self.setData({
                    toastData:{
                        isShow:false
                    }
                })
            },self.data.toastData.delay)

        }
    }
})
