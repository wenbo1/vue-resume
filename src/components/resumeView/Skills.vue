<template>
  <div class="page-item section">
    <h2>技能</h2>
    <mu-container class="container">
      <mu-chip v-for="(item, index) in Skills.tags" class="chip" :key="index" color="#b0bec5" text-color="rgb(56, 19, 59)">
        {{item}}
      </mu-chip>
    </mu-container>
  </div>
</template>
<script>
// import shuffle from 'shuffle-array'
export default {
  props: {
    Skills: Object
  },
  data () {
    return {
      // skills: ['vue', 'react', 'js', 'html', 'css', 'node']
    }
  },
  computed: {
  },
  methods: {
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
</style>
