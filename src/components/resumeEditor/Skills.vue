<template>
  <div class="page-item section">
    <h2>技能</h2>
    <mu-container class="container">
        <mu-select class="sk-tags" label="输入后回车添加" v-model="skills.tags" chips multiple tags>
        </mu-select>
        <div class="btn-box">
          <mu-button v-loading="loading" data-mu-loading-size="24" color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </div>
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
      skills: this.Skills,
      reset: this.Skills,
      loading: false
    }
  },
  methods: {
    submit () {
      this.loading = true
      let Data = {
        userData: {
          skills: this.skills
        }
      }
      this.api.update(Data).then((response) => {
        console.log(response)
        if (response.data.success) {
          alert('更新成功！')
        } else {
          alert(response.data.message)
        }
        this.loading = false
      }).catch((error) => {
        this.openSimple = true
        console.log(error)
      })
    },
    closeSimpleDialog () {
      this.openSimple = false
    },
    clear () {
      this.skills = this.reset
      console.log('111')
    }
  },
  computed: {
    normalizedSize: function () {
      return this.Skills
    }
  },
  beforeDestroy () {
  },
  watch: {
    Skills () {
      this.skills = this.Skills
    }
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
