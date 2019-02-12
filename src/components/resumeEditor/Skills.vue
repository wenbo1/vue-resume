<template>
  <div class="page-item section">
    <h2>技能</h2>
    <mu-container class="container">
        <mu-select class="sk-tags" label="输入后回车添加" v-model="skills.tags" chips multiple tags>
        </mu-select>
        <div class="btn-box">
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </div>
    </mu-container>
  </div>
</template>
<script>
// import shuffle from 'shuffle-array'
export default {
  props: {
    Skills: Array
  },
  data () {
    return {
      skills: {
        tags: this.Skills
      }
    }
  },
  computed: {
  },
  methods: {
    submit () {
    },
    clear () {
    }
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 2s;
}
.section {
  background-color: rgb(56, 19, 59) !important;
  .container {
    width: 80%;
    .chip {
      margin: 10px;
    }
  }
}
.btn-box{
  .mu-button{
    margin: 6px 8px;
  }
}
</style>
