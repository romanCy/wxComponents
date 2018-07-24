// pages/userInfo/components/timePicker/timePicker.js
const date = new Date()
const nowYear = date.getFullYear()
const nowMonth = date.getMonth() + 1
const nowDay = date.getDate()

let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// 根据年月 获取当月的总天数
let getDays = function (year, month) {
    if (month === 2) {
        return ((year % 4 === 0) && ((year % 100) !== 0)) || (year % 400 === 0) ? 29 : 28
    } else {
        return daysInMonth[month - 1]
    }
}


// 根据年月日设置当前月有多少天 并更新年月日数组
let setDate = function (year, month, day, _th) {
    let daysNum = year === nowYear && month === nowMonth ? nowDay : getDays(year, month)
    day = day > daysNum ? 1 : day
    let monthsNum = year === nowYear ? nowMonth : 12
    let years = []
    let months = []
    let days = []
    let yearIdx = 9999
    let monthIdx = 0
    let dayIdx = 0

    // 重新设置年份列表
    for (let i = 1950; i <= nowYear; i++) {
        years.push(i)
    }
    years.map((v, idx) => {
        if (v === year) {
            yearIdx = idx
        }
    })
    // 重新设置月份列表
    for (let i = 1; i <= monthsNum; i++) {
        months.push(i)
    }
    months.map((v, idx) => {
        if (v === month) {
            monthIdx = idx
        }
    })
    // 重新设置日期列表
    for (let i = 1; i <= daysNum; i++) {
        days.push(i)
    }
    days.map((v, idx) => {
        if (v === day) {
            dayIdx = idx
        }
    })

    _th.setData({
        years: years,//年份列表
        months: months,//月份列表
        days: days,//日期列表
        value: [yearIdx, monthIdx, dayIdx],
        ['modalData.year']: year,
        ['modalData.month']: month,
        ['modalData.day']: day,
        year: year,
        month: month,
        day: day
    })
}

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        modalData: {
            type: Object,
            value: {},
            observer: function(newVal, oldVal, changedPath) {
                // this.__proto__.setTimeData(this.data.modalData.year, this.data.modalData.month, this.data.modalData.day);
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        years: [],
        months: [],
        days: [],
        year: 2018,
        month: 1,
        day: 28,
        value: [9999, 1, 1]
    },


    /**
     * 组件的方法列表
     */
    methods: {
        setTimeData(year,month,day) {
          let self=this;
          // console.log(year,month,day, self)
            setDate(this.data.modalData.year, this.data.modalData.month, this.data.modalData.day,this);
        },
        bindChange: function (e) {
            let val = e.detail.value;
            setDate(this.data.years[val[0]], this.data.months[val[1]], this.data.days[val[2]], this)
        },
        sure: function () {
            let self = this;
            this.triggerEvent('sure', {
                year: self.data.modalData.year,
                month: self.data.modalData.month,
                day: self.data.modalData.day
            });
            self.setData({
                ['modalData.isShow']: false
            })
        },
        cancel: function () {
            let self = this;
            self.setData({
                ['modalData.isShow']: false
            })
        },
        nofn: function () {

        }
    },


})
