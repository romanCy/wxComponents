// components/activeSwiper/activeSwiper.js
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
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532694184535&di=26986589a423ce8bbf99259a26c5d0f0&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201608%2F27%2F20160827095343_mCw5V.thumb.700_0.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532694184534&di=be6887e9c593dedb6937569a16e4b4aa&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201512%2F19%2F20151219011640_HY5ZF.thumb.700_0.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532694184533&di=9fd5394b027ffabf93827f130895e4cd&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201511%2F18%2F20151118220145_GxHsY.thumb.700_0.png',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532694184533&di=44a79d1797fe568e35e2510667959cbe&imgtype=0&src=http%3A%2F%2Fp4.gexing.com%2FG1%2FM00%2F9B%2FBD%2FrBACFFOrZmbTe35_AABg8GMgwNU076_600x.jpg'
    ],
    swiperHeight:400,
    swiperIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindchange(e) {
      this.setData({
        swiperIndex: e.detail.current
      })
    }

  }
})
