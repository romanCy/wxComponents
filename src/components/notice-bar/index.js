const VALID_MODE = ['closeable'];
const FONT_COLOR = '#f60';
const BG_COLOR = '#fff7cc';

Component({
    externalClasses: ['i-class'],

    properties: {
        closable: {
            type: Boolean,
            value: false
        },
        icon: {
            type: String,
            value: ''
        },
        loop: {
            type: Boolean,
            value: false
        },
        // 背景颜色
        backgroundcolor: {
            type: String,
            value: '#fefcec'
        },
        // 字体及图标颜色
        color: {
            type: String,
            value: '#f76a24'
        },
        // 滚动速度
        speed: {
            type: Number,
            value: 1000
        }
    },

    
    data: {
        titleIndex:0,
        show: true,
        wrapWidth: 0,
        width: 0,
        duration: 0,
        animation: null,
        timer: null,
        arr:['wasdkmwejkr','jkejnfadklakl'],
        titleMsg:''
    },
    detached() {
        this.destroyTimer();
    },
    ready() {
        if (this.data.loop) {
            this.initAnimation();
        }
    },

    methods: {
        initAnimation() {
            console.log('initAnimation')
            wx.createSelectorQuery().in(this).select('.i-noticebar-content-wrap').boundingClientRect((wrapRect) => {
                wx.createSelectorQuery().in(this).select('.i-noticebar-content').boundingClientRect((rect) => {
                    const duration = rect.width / 40 * this.data.speed;
                    const animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: "linear",
                    });
                    this.setData({
                        wrapWidth: wrapRect.width,
                        width: rect.width,
                        duration: duration,
                        animation: animation
                    }, () => {
                        this.startAnimation();
                    });
                }).exec();

            }).exec();
        },
        startAnimation() {
            let self=this;
            
            
            console.log('startAnimation')
            console.log(this.data.duration)
            //reset
            if (this.data.animation.option.transition.duration !== 0) {
                this.data.animation.option.transition.duration = 0;
                const resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step();
                this.setData({
                    animationData: resetAnimation.export()
                });
            }
            this.data.animation.option.transition.duration = this.data.duration;
            const animationData = this.data.animation.translateX(-this.data.width).step();
            setTimeout(() => {
                this.setData({
                    animationData: animationData.export()
                });
            }, 100);
            const timer = setTimeout(() => {

                if(this.data.titleIndex+1===self.data.arr.length){
                    this.handleClose()
                    return false;
                }
                this.startAnimation();
                this.setData({
                    titleIndex:this.data.titleIndex+1
                })
                console.log(this.data.titleIndex)
                this.setData({
                    titleMsg:this.data.arr[self.data.titleIndex]
                })

            }, this.data.duration);
            this.setData({
                timer,
            });
        
        },
        destroyTimer() {
            if (this.data.timer) {
                clearTimeout(this.data.timer);
            }
        },
        handleClose() {
            console.log('handleClose')
            this.destroyTimer();
            this.setData({
                show: false,
                timer: null
            });
        }
    }
});
