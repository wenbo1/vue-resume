<template>
  <div class="page-item section">
    <h2>联系我</h2>
    <div class="contact">
      <div class="experience">
        <h3>经验</h3>
        {{Contact.experience}}
      </div>
      <div class="evaluation">
        <h3>评价</h3>
        {{Contact.evaluation}}
      </div>
      <div class="socials">
        <h3>开发社区账号</h3>
        <div class="box">
          <template v-for="(item, index) in Contact.socials">
            <a class="socials-item" :key="index" :href="item.url" target="_blank">
              <mu-icon class="icon" :value="`:iconfont icon-${item.icon}`"></mu-icon>
            </a>
          </template>
        </div>
      </div>
      <div class="contact-me">
        <h3>联系方式</h3>
        <a class="btn" :href="`tel:${Contact.tel}`" target="_blank">
          <mu-icon class="icon" :value="`:iconfont icon-dianhua`"></mu-icon>
          {{Contact.tel}}
        </a>
        <a class="btn" target="_blank">
          <mu-icon class="icon" :value="`:iconfont icon-fayoujian`"></mu-icon>
          {{Contact.email}}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // ..
  props: {
    Contact: Object
  },
  computed: {
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
        display: flex;
        justify-content: center;
        align-items: center;
        .socials-item {
          display: block;
          height: 40px;
          width: 40px;
          background: rgba(11, 5, 48, 0.3);
          border-radius: 20px;
          text-align: center;
          .icon {
            font-size: 1.5rem;
            line-height: 40px;
            color: rgb(162, 165, 168);
          }
        }
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
  }
}
</style>
