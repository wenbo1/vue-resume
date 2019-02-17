<template>
  <div class="page-item section">
    <h2>经历</h2>
    <div class="career">
      <template v-for="(item, index) in career">
        <div class="item" :key="index">
          <mu-col span="12" lg="4" sm="6">
            <mu-date-input v-model="item.timeStart" type="month" value-format="YYYY-MM"></mu-date-input><span>-</span><mu-date-input v-model="item.timeEnd" type="month" value-format="YYYY-MM"></mu-date-input>
          </mu-col>
          <mu-text-field v-model="item.text" placeholder="默认3行, 最大显示6行" multi-line :rows="3" :rows-max="3" full-width></mu-text-field>
        </div>
      </template>
      <div class="item">
        <mu-icon class="add-icon" @click="addCareer" value="add" size="40" color="blue"></mu-icon>
      </div>
    </div>
    <div class="btn-box">
      <mu-button v-loading="loading" data-mu-loading-size="24" color="primary" @click="submit">提交</mu-button>
      <mu-button @click="clear">重置</mu-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Career: Array
  },
  data () {
    return {
      career: this.Career,
      reset: this.Career,
      loading: false
    }
  },
  methods: {
    addCareer () {
      this.career.push({})
    },
    submit () {
      // this.career.forEach(item, index => {
      //   item.text ? '' : this.career.splice(index, 1)
      // })
      this.career.forEach((element, index) => {
        if (!element.text) {
          this.career.splice(index, 1)
        }
      })
      this.loading = true
      let Data = {
        career: this.career
      }
      this.api.update(Data).then((response) => {
        console.log(response)
        if (response.data.success) {
          alert('更新成功！')
        } else {
          this.dialogMsg = response.data.message
          this.openSimple = true
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
      this.career = this.reset
      console.log('111')
    }
  },
  computed: {
  },
  watch: {
    Career () {
      this.career = this.Career
    }
  }
}
</script>
<style lang="scss" scoped>
.section {
  background-color: rgba(3, 56, 11, 0.568) !important;
  .career {
    width: 95%;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    overflow: auto;
    .item {
      min-width: 100%;
      margin: 10px 0;
      padding: 0 10px;
      // background-color: rgba(23, 95, 59, 0.747);
      // box-shadow: 0 1px 1px #000;
      // border-radius: 10px;
      .title {
        margin: 0;
        text-align: left;
      }
      .text {
        color: rgb(170, 174, 179);
        text-align: left;
      }
      .col{
        .mu-input{
          width: 106px;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        span{
          padding: 0 10px;
        }
      }
    }
  }
  .add-icon{
    cursor: pointer;
  }
  .btn-box{
    .mu-button{
      margin: 6px 8px;
    }
  }
}
</style>
