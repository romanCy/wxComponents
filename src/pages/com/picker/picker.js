// pages/com/picker/picker.js
import list from "./data"
let ll=list.list
let leavl=3
let allList={}
let value=[0,0,0]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray:[],
    multiIndex:[0,0,0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let fir=[]
    let sec=[]
    let thi=[]
    console.log(ll)
    ll.map((item)=>{
      fir.push(item.name)
    })
    ll[0].list.map((item)=>{
      sec.push(item.name)
    })
    ll[0].list[0].list.map((item)=>{
      thi.push(item.name)
    })
    this.setData({
      multiArray:[fir,sec,thi]
    })
    console.log(this.data.multiArray)


    for(let i=0;i<ll.length;i++){
      allList[`${i}`]=[]
      for(let j=0;j<ll[i].list.length;j++){
        allList[`${i}`].push(ll[i].list[j].name)
        allList[`${i}${j}`]=[]
        for(let k=0;k<ll[i].list[j].list.length;k++){
          allList[`${i}${j}`].push(ll[i].list[j].list[k].name)
        }
      }
    }
    console.log(allList)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindMultiPickerColumnChange({detail}) {
    value[detail.column]=detail.value
    console.log(detail)
    let _=this
    if(detail.column==0){
      _.data.multiArray.splice(1,1,allList[`${detail.value}`])
      this.setData({
        multiArray:_.data.multiArray
      })
      value[1]=0
      _.data.multiArray.splice(2,1,allList[`${value[0]}${0}`])
      this.setData({
        multiArray:_.data.multiArray
      })

    }
    else if(detail.column==1){
      _.data.multiArray.splice(2,1,allList[`${value[0]}${detail.value}`])
      this.setData({
        multiArray:_.data.multiArray
      })
    }

  },
  bindchange({detail}){
    console.log(detail)
  }
})