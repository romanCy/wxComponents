// components/toast/toast.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        toastData: {
            type: Object,
            value: {
                isShow:false
            },
            observer: 'ssss'
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
        tap:function () {
            this.setData({
                toastData: {
                    isShow:false
                }
            })

        }
    }
})
