<template>
  <div class="nav">
    <span v-for="(item, index) in pageSum" :key="index" class="iconfont icon-dian nav-item" :class="index === page ? 'active' : ''" @click="changePage(index)"></span>
  </div>
</template>

<script>
export default {
  props: {
    pageSum: Number,
    page: Number
  },
  data () {
    return {
      // showArrow: this.show
    }
  },
  computed: {
  },
  methods: {
    changePage (p) {
      this.$emit('changePage', p)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/common/main.scss';

.nav{
  position: fixed;
  right: 10px;
  top: 45%;
  z-index: 100;
  .nav-item {
    width: 14px;
    height: 22px;
    line-height: 22px;
    display: block;
    font-size: 11px;
    transition: all .5s ease;
    cursor: pointer;
  }
  .active {
    color: $fontColor;
    font-size: 14px;
  }
}
</style>
