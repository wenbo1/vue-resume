<template>
  <div class="page-item section">
    <h2>信息</h2>
    <mu-avatar size=80>
      <img :src="Info.avatar">
    </mu-avatar>
    <h4>{{Info.name}}</h4>
    <h3>{{Info.introduce}}</h3>
    <mu-container class="papers">
      <template v-for="(item, index) in Info.status">
        <mu-paper :key="index" class="paper" circle :z-depth="4">
          <i :class="`iconfont ${item.icon}`"></i>
          <div class="title">{{item.value}}</div>
        </mu-paper>
      </template>
    </mu-container>
  </div>
</template>
<script>
export default {
  // ..
  props: {
    Info: Object
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-color: rgb(20, 73, 73) !important;
  .papers {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .paper {
      margin: 15px;
      width: 50px;
      height: 50px;
      color: rgb(192, 200, 207);
      background-color: rgba(97, 136, 207, 0.363);
      .iconfont {
        height: 50px;
        line-height: 50px;
        font-size: 30px;
      }
      .title {
        font-size: .9rem;
        margin: 5px 0;
      }
    }
  }
}
</style>
