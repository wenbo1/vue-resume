<template>
  <div @mousewheel="mouseWheel">
    <v-touch class="resume" @panstart="panstart" @panend="panend" @panmove="panmove">
      <Nav :pageSum="pageSum + 1" :page="page" @changePage="toPage"/>
      <div class="page" :style="{transform: 'translateY(' + pageAction + 'px)', transition: Transition}">
        <slot></slot>
      </div>
      <div class="next">
        <Down @nextPage="toNext"/>
      </div>
    </v-touch>
  </div>
</template>
<script>
import Down from '@/components/Down'
import Nav from '@/components/Nav'
export default {
  name: 'resume',
  components: {
    Down,
    Nav
  },
  data () {
    return {
      lastScroll: 0,
      pageSum: 4,
      touchMove: 0,
      pageMove: 0,
      page: 0,
      Transition: 'all .5s ease'
    }
  },
  computed: {
    pageAction () {
      var windowH = document.body.clientHeight
      return (-windowH * this.page) + this.touchMove
    }
  },
  methods: {
    changeAnimation () {
      this.clickRouteChange()
    },
    mouseWheel (event) {
      // 防止用户短时间内滚动多次，设置滚动间隔大于一秒才能生效
      // 判断滚动间隔时间
      let scrollDuration = event.timeStamp - this.lastScroll
      // console.log(scrollDuration)
      if (scrollDuration > 1000) {
        // 将这一次的滚动时间记录为上一次合法的滚动时间
        this.lastScroll = event.timeStamp
        // console.log('合法的滚动')
        // 判断滚动方向进行操作
        if (event.deltaY > 0 && this.page < this.pageSum) {
          this.page++
        } else if (event.deltaY < 0 && this.page > 0) {
          this.page--
        }
      } else {
        // 如果滚动不合法就不做任何操作
        console.log('请爱护你的鼠标不要连续滚动！')
      }
    },
    panstart (e) {
    },
    panend (e) {
      this.Transition = 'all .5s ease'
      if (Math.abs(this.touchMove) > 100) {
        if (this.touchMove > 0 && this.page > 0) {
          this.page--
        } else if (this.touchMove < 0 && this.page < this.pageSum) {
          this.page++
        }
      }
      this.touchMove = 0
    },
    panmove (e) {
      this.Transition = null
      if ((this.page <= 0 && e.deltaY > 0) || (this.page >= this.pageSum && e.deltaY < 0)) {
        this.touchMove = e.deltaY / 10
      } else {
        this.touchMove = e.deltaY
      }
    },
    toNext () {
      if (this.page < this.pageSum) {
        this.page++
      }
    },
    toPage (p) {
      this.page = p
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../common/main.scss';

.resume {
  width: 100vw;
  .page {
    background-color: $mainColor;
  }
}
</style>
