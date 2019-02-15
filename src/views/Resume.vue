<template>
  <Resume>
    <Info :Info="infoData.info"/>
    <Skills :Skills="infoData.skills"/>
    <Profiles :Profiles="infoData.profiles"/>
    <Career :Career="infoData.career"/>
    <Contact :Contact="infoData.contact"/>
  </Resume>
</template>
<script>
import Resume from '@/components/Resume'
import Info from '@/components/resumeView/Info'
import Skills from '@/components/resumeView/Skills'
import Profiles from '@/components/resumeView/Profiles'
import Career from '@/components/resumeView/Career'
import Contact from '@/components/resumeView/Contact'
import avatar from '@/assets/avatar.jpeg'
export default {
  components: {
    Resume,
    Info,
    Skills,
    Profiles,
    Career,
    Contact
  },
  data () {
    return {
      infoData: {
        info: {
          name: '',
          avatar,
          introduce: '',
          status: [
            {
              icon: 'icon-icon-',
              value: ''
            },
            {
              icon: 'icon-xueli',
              value: ''
            },
            {
              icon: 'icon--jiehun',
              value: ''
            },
            {
              icon: 'icon-zhiwei',
              value: ''
            }
          ]
        },
        skills: {
          tags: []
        },
        profiles: [
          {}
        ],
        career: [
          {}
        ],
        contact: {
          experience: '',
          evaluation: '',
          email: '',
          tel: '',
          socials: [
            {
              url: '',
              icon: 'GitHub'
            },
            {
              url: '',
              icon: 'sf'
            },
            {
              url: '',
              icon: 'zhihu'
            },
            {
              url: '',
              icon: 'csdn'
            }
          ]
        }
      }
    }
  },
  beforeCreate () {
    var data = this.$route.params.name
    this.api.getResume(data).then((response) => {
      let data = response.data
      if (data.token === false) {
        this.token.removeToken()
        return false
      }
      if (!data.data) {
        alert('暂无简历！')
        return this.$router.replace('/login')
      }
      console.log(data)
      this.infoData = data.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
