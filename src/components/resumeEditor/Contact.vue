<template>
  <div class="page-item section">
    <h2>联系我</h2>
    <div class="contact">
      <div class="experience">
        <mu-text-field v-model="contact.experience" placeholder="经验" multi-line :rows="1" :rows-max="3" full-width></mu-text-field>
      </div>
      <div class="evaluation">
        <mu-text-field v-model="contact.evaluation" placeholder="评价" multi-line :rows="1" :rows-max="3" full-width></mu-text-field>
      </div>
      <div class="socials">
        <h3>开发社区账号</h3>
        <div class="box">
          <template v-for="(item, index) in contact.socials">
            <mu-text-field :key="index" v-model="item.url" :placeholder="item.icon" full-width></mu-text-field>
          </template>
        </div>
      </div>
      <div class="contact-me">
        <h3>联系方式</h3>
        <mu-text-field v-model="contact.tel" placeholder="电话" full-width></mu-text-field>
        <mu-text-field v-model="contact.email" placeholder="邮箱" full-width></mu-text-field>
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
  // ..
  props: {
    Contact: Object
  },
  data () {
    return {
      contact: this.Contact,
      reset: this.Contact,
      loading: false
    }
  },
  methods: {
    submit () {
      this.loading = true
      let Data = {
        contact: this.contact
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
      this.contact = this.reset
      console.log('111')
    }
  },
  computed: {
  },
  watch: {
    Contact () {
      this.contact = this.Contact
    }
  }
}
</script>
<style lang="scss" scoped>
.section {
  background-color: rgba(13, 16, 110, 0.575) !important;
  .contact {
    width: 85%;
    text-align: left;
    h3 {
      // text-align: center;
      margin-top: 0;
    }
    .socials {
      .box {
        width: 100%;
      }
    }
    .contact-me {
      .btn {
        margin: 0 auto;
        display: block;
        height: 30px;
        width: 85%;
        background: rgba(11, 5, 48, 0.3);
        border-radius: 15px;
        font-size: 1.1rem;
        line-height: 30px;
        color: rgb(148, 154, 161);
        margin-bottom: 5px;
        text-align: left;
        text-indent: 1rem;
        .icon {
          font-size: 1.1rem;
          color: rgb(210, 213, 216);
          padding: 0 10px;
        }
      }
    }
    .mu-input{
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
  .btn-box{
    .mu-button{
      margin: 6px 8px;
    }
  }
}
</style>
