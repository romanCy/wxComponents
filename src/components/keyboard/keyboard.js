// components/keyboard/keyboard.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        keyData: {
            type: Object,
            value: {},
            observer: function () {
                let self = this;
                if (this.data.keyData.numlength == 4) {
                    self.setData({
                        numCount: ['', '', '', '']
                    })
                }
                else if (this.data.keyData.numlength == 6) {
                    self.setData({
                        numCount: ['', '', '', '', '', '']
                    })
                }
                if (this.data.keyData.type == 2) {
                    self.setData({
                        ['list[2]']: self.data.list[2].sort(function () {
                            return Math.random() - 0.5
                        })

                    })
                }
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        list: {
            1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        },
        numCount: ['', '', '', ''],
        numf: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        close: function () {
            this.setData({
                ['keyData.isShow']: false
            })
        },
        keydown: function (e) {
            let self = this;
            if (self.data.numf == self.data.keyData.numlength) {
                return false;
            }
            self.data.numCount[self.data.numf] = e.currentTarget.dataset.num;

            self.data.numf = self.data.numf + 1;
            self.setData({
                numCount: self.data.numCount,
                numf: self.data.numf
            }, function () {
                if (self.data.numf == self.data.keyData.numlength) {
                    wx.showToast({
                        title: self.data.numCount.join(''),
                        icon: 'none'
                    })
                }
            })

        },
        back: function () {
            let self = this;
            if (self.data.numf == 0) {
                return false;
            }
            self.data.numCount[self.data.numf - 1] = '';
            self.data.numf = self.data.numf - 1;
            self.setData({
                numCount: self.data.numCount,
                numf: self.data.numf
            })
        }
    }
})
