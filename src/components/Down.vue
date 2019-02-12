<template>
  <div class="next" v-show="showArrow">
    <i @click="toNext" class="iconfont icon-xiala3 arrow"></i>
  </div>
</template>
<script>
export default {
  // ..
  // props: {
  //   show: {
  //     type: Boolean,
  //     required: true
  //   }
  // },
  data () {
    return {
      showArrow: true
    }
  },
  computed: {
  },
  methods: {
    toNext () {
      this.$emit('nextPage')
    }
  }
}
</script>
<style lang="scss" scoped>
.next {
  position: fixed;
  bottom: 5px;
  left: 50%;
  margin-left: -15px;
  animation: arrow-animate 2s infinite;
  .arrow {
    color: rgba(9, 58, 65, 0.7);
    font-size: 30px;
    cursor: pointer;
  }
}
@keyframes arrow-animate {
  0% {bottom: 20px}
  // 25% {bottom: 24px}
  50% {bottom: 15px}
  // 75% {bottom: 12px}
  100% {bottom: 10px}
}
</style>
