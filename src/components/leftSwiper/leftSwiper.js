// components/leftSwiper/leftSwiper.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        modalData:{
            type:Object,
            value:{}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        startX:0,
        startY:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        touchstart: function (e) {
            //开始触摸时 重置所有删除
            this.data.modalData.items.forEach(function (v, i) {
                if (v.isTouchMove)//只操作为true的
                    v.isTouchMove = false;
            })
            this.setData({
                startX: e.changedTouches[0].clientX,
                startY: e.changedTouches[0].clientY,
                items: this.data.modalData.items
            })
        },
        //滑动事件处理
        touchmove: function (e) {
            var that = this,
                index = e.currentTarget.dataset.index,//当前索引
                startX = that.data.startX,//开始X坐标
                startY = that.data.startY,//开始Y坐标
                touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
                touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
                //获取滑动角度
                angle = that.angle({X: startX, Y: startY}, {X: touchMoveX, Y: touchMoveY});
            that.data.items.forEach(function (v, i) {
                v.isTouchMove = false
                //滑动超过30度角 return
                if (Math.abs(angle) > 30) return;
                if (i == index) {
                    if (touchMoveX > startX) //右滑
                        v.isTouchMove = false
                    else //左滑
                        v.isTouchMove = true
                }
            })
            //更新数据
            that.setData({
                ['modalData.items']: that.data.items
            })
        },
        angle: function (start, end) {
            var _X = end.X - start.X,
                _Y = end.Y - start.Y
            //返回角度 /Math.atan()返回数字的反正切值
            return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
        },
        //删除事件
        del: function (e) {
            this.data.modalData.items.splice(e.currentTarget.dataset.index, 1)
            this.setData({
                ['modalData.items']: this.data.modalData.items
            })
        }
    }
})
