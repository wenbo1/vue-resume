<template>
  <div class="page-item section">
    <h2>信息</h2>
    <mu-avatar>
      <img :src="infoData.avatar">
    </mu-avatar>
    <mu-container class="papers">
      <mu-form ref="infoForm" :model="infoData" class="info-form">
        <mu-text-field v-model="infoData.name" label="姓名" label-float></mu-text-field>
        <mu-text-field v-model="infoData.introduce" label="座右铭" label-float></mu-text-field>
        <mu-select label="籍贯" v-model="infoData.status[0].value" label-float>
          <mu-option v-for="option in options.nativePlace" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
        <mu-select label="学历" v-model="infoData.status[1].value" label-float>
          <mu-option v-for="option in options.education" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
        <mu-form-item prop="radio" label="婚姻状况">
          <mu-radio v-model="infoData.status[2].value" value="已婚" label="已婚"></mu-radio>
          <mu-radio v-model="infoData.status[2].value" value="未婚" label="未婚"></mu-radio>
        </mu-form-item>
        <mu-form-item prop="radio" label="工作状况">
          <mu-radio v-model="infoData.status[3].value" value="在职" label="在职"></mu-radio>
          <mu-radio v-model="infoData.status[3].value" value="离职" label="离职"></mu-radio>
        </mu-form-item>
        <mu-form-item class="btn-box">
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>
<script>
import { info } from '@/data/info'
export default {
  // ..
  props: {
    Info: Object
  },
  data () {
    return {
      infoData: this.Info,
      options: {
        nativePlace: info.nativePlace,
        education: info.education,
        marriage: [],
        working: []
      }
    }
  },
  methods: {
    submit () {
      this.$refs.infoForm.validate().then((result) => {
        console.log('form valid: ', result)
      })
    },
    clear () {
      this.$refs.infoForm.clear()
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      }
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-color: rgb(20, 73, 73) !important;
  .papers {
    max-width: 720px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .mu-input{
      min-height: 64px;
      margin: 0 10px;
      padding-bottom: 4px;
    }
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
  .info-form{
    .mu-form-item{
      width: 256px;
      text-align: left;
      display: inline-block;
      margin: 0 10px;
      min-height: 62px;
    }
    .btn-box{
      .mu-form-item-content{
        justify-content: center;
      }
    }
  }
}
</style>
