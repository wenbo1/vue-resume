<template>
  <div class="page-item section">
    <h2>项目</h2>
    <mu-carousel class="carousel" :hide-controls="controls" :hide-indicators="indicators" transition="slide" :cycle="cycle">
      <template v-for="(profile, index) in profiles">
        <mu-carousel-item :key="index">
          <mu-container class="box">
            <mu-card class="card" style="width: 100%; margin: 0 auto;">
              <mu-text-field v-model="profile.title"></mu-text-field>
              <mu-text-field v-model="profile.text" placeholder="默认3行, 最大显示6行" multi-line :rows="3" :rows-max="6" full-width></mu-text-field>
              <mu-text-field v-model="profile.github" placeholder="项目地址"></mu-text-field>
            </mu-card>
          </mu-container>
        </mu-carousel-item>
        <mu-carousel-item :key="index + profiles.length" v-if="index === profiles.length - 1">
          <mu-container class="box add-box">
            <mu-card class="card" style="width: 100%; margin: 0 auto;">
              <mu-icon @click="addProfiles" value="note_add" size="80" color="blue"></mu-icon>
            </mu-card>
          </mu-container>
        </mu-carousel-item>
      </template>
    </mu-carousel>
    <div class="btn-box">
      <mu-button v-loading="loading" data-mu-loading-size="24" color="primary" @click="submit">提交</mu-button>
      <mu-button @click="clear">重置</mu-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Profiles: Array
  },
  data () {
    return {
      cycle: false,
      indicators: true,
      controls: false,
      profiles: this.Profiles,
      reset: this.Profiles,
      loading: false
    }
  },
  methods: {
    addProfiles () {
      console.log('11')
      this.profiles.push({})
    },
    submit () {
      this.loading = true
      let Data = {
        profiles: this.profiles
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
      this.profiles = this.reset
      console.log('111')
    }
  },
  computed: {
  },
  watch: {
    Profiles () {
      this.profiles = this.Profiles
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-color: rgb(73, 80, 10) !important;
  .carousel {
    height: auto;
    min-height: 50vh;
    .mu-carousel-item {
      display: flex;
      justify-content: center;
      align-items: center;
      .box {
        width: 85%;
        .card {
          background: rgba(126, 123, 94, 0.664);
          border-radius: 10px;
          padding: 20px 20px 0;
          .mu-card-header {
            padding-bottom: 0;
          }
          .mu-card-header-title {
            padding: 0;
            width: 100%;
          }
          .mu-card-title {
            width: 100%;
            color: rgb(0, 0, 0);
            font-size: 1.3rem;
            text-align: left;
          }
          .mu-card-sub-title {
            color: rgb(34, 34, 34);
            text-align: left;
          }
          .mu-card-text {
            padding: 0 16px;
            // letter-spacing: .07rem;
            letter-spacing: 1px;
            color: rgb(0, 0, 0);
            text-align: left;
          }
          .mu-card-actions {
            padding: 0;
            .icon {
              font-size: 30px;
              color: #000;
            }
          }
          .img {
            @media screen and (min-width: 960px) {
              display: none;
            }
          }
        }
      }
      .add-box{
        .card{
          height: 250px;
          line-height: 250px;
          padding: 20px;
        }
      }
    }
  }
  .btn-box{
    .mu-button{
      margin: 6px 8px;
    }
  }
}
</style>
