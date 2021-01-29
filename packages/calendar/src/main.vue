<!--
 * @Author: zhangyun
 * @Date: 2021-01-29 11:04:40
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-29 16:57:38
 * @FilePath: /react-admin-demo/Users/snake/Desktop/OWN_PROJECT/COMPONENTS_LIBRAY/lib_vue/packages/calendar/src/main.vue
-->
<template>
  <div class="calendar">
    <div class="calendar-header-container clear">
      <div class="current-year-month title-container float-l">{{ dateTime }}</div>
      <div class="turn-page  float-l" v-show="isTurnPage">
        <span class="last-month" @click="lastMonth">&#9668;</span>
        <span class="next-month" @click="nextMonth">&#9658;</span>
      </div>
      <div class="right-container  float-r">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="main-container">
      <ul class="calendar-week-container clear clear-default">
        <li v-for="inx in weekList" class="disabled week float-l clear-default" :key="inx">
          {{ inx }}
        </li>
      </ul>
      <ul class="calendar-day-container clear clear-default">
        <template v-for="(item, index) of days">
          <li class="day clear-default float-l " :key="index" v-if="item === null"></li>
          <li class="day clear-default float-l day-hover" :key="index" v-else>
            <span class="day-text" :class="[isHighlight(item.date) && 'highlight']">{{ item.day }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Calendar',
  props: {
    isTurnPage: {
      type: Boolean,
      default: true,
      desc: '是否支持跳转月份',
    },
    isHighlightToday: {
      type: Boolean,
      default: true,
      desc: '是否高亮当天',
    },
  },
  data() {
    return {
      weekList: ['日', '一', '二', '三', '四', '五', '六'],
      year: '',
      month: '',
      days: [],
      today: '',
    }
  },
  mounted() {
    this.initCalendar()
  },
  computed: {
    dateTime() {
      return this.year + '年' + this.month + '月'
    },
  },
  watch: {
    month: {
      handler(val) {
        if (!val) return
        this.getDays(this.year, val)
      },
    },
    year: {
      handler(val) {
        if (!val) return
        this.getDays(val, this.month)
      },
    },
  },
  methods: {
    initCalendar() {
      const { year, month, day } = this.parseDate()
      this.year = year
      this.month = month
      this.today = day
      this.getDays(this.year, this.month)
    },
    getDays(Y, M) {
      const date = new Date(Y, M, 0)
      const day = date.getDate()
      this.days = []
      for (let i = 1; i <= day; i++) {
        this.days.push({
          date: `${this.year}-${this.month}-${i}`,
          week: this.getWeek(`${Y}-${M}-${i}`),
          day: i,
        })
      }
      if (this.days[0].week !== '日') {
        const insertDays = {
          一: [null],
          二: [null, null],
          三: [null, null, null],
          四: [null, null, null, null],
          五: [null, null, null, null, null],
          六: [null, null, null, null, null, null],
        }
        this.days.unshift(...insertDays[this.days[0].week])
      }
    },
    getWeek(date) {
      const week = this.weekList[new Date(date).getDay()]
      return week
    },
    lastMonth() {
      this.month--
      if (this.month == 0) {
        this.month = 12
        this.year--
      }
    },
    nextMonth() {
      this.month++
      if (this.month > 12) {
        this.month = 1
        this.year++
      }
    },
    isHighlight(date) {
      const { base } = this.parseDate()
      return this.isHighlightToday && date === base
    },
    parseDate() {
      const DATE = new Date()
      const year = DATE.getFullYear()
      const month = DATE.getMonth() + 1
      const day = DATE.getDate()
      return {
        base: year + '-' + month + '-' + day,
        year: year,
        month: month,
        day: day,
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.clear-default {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.float-l {
  float: left;
}
.float-right {
  float: right;
}
.clear {
  overflow: hidden;
}
.calendar {
  background-color: #084292;
  color: #fff;
  font-weight: 800;
  font-size: 19px;
}
.calendar-header-container {
  padding: 10px;
  border: 1px solid #05cef2;
}
// 周
.calendar-week-container {
  background-color: #4375b7be;
  padding: 5px;
  margin: 5px;
  .week {
    width: calc(100% / 7);
    color: #05cef2;
  }
}
.main-container {
  border: 1px solid #05cef2;
  margin-top: 2px;
}
// 天
.calendar-day-container {
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  .day {
    width: calc(100% / 7);
    padding: 2px 0;
  }
  .day-hover:hover {
    color: #05cef2;
    cursor: default;
  }
  .highlight {
    background-color: #2ac4e2 !important;
    border-radius: 50%;
  }
  .day-text {
    display: inline-block;
    width: 36px;
    height: 36px;
    line-height: 36px;
  }
}
// 月份跳转
.turn-page {
  margin-left: 20px;
  span {
    display: inline-block;
    cursor: pointer;
  }
  span:nth-of-type(2) {
    margin-left: 3px;
  }
  span:hover {
    color: #05cef2;
  }
}
</style>
