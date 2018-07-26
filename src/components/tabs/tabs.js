// components/tabs/tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabData: {
            type: Object,
            value: {},
            observer: function () {

            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        selectedId:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        selectItem: function (e) {
            console.log(e.currentTarget.dataset.id);
            let self=this;
            self.setData({
                selectedId:e.currentTarget.dataset.id
            })
        }
    }
})
