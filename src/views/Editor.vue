<template>
  <Resume>
    <Info :Info="userData.info || infoData.info"/>
    <Skills :Skills="userData.skills || infoData.skills"/>
    <Profiles :Profiles="userData.profiles || infoData.profiles"/>
    <Career :Career="userData.career || infoData.career"/>
    <Contact :Contact="userData.contact || infoData.contact"/>
  </Resume>
</template>
<script>
import Resume from '@/components/Resume'
import Info from '@/components/resumeEditor/Info'
import Skills from '@/components/resumeEditor/Skills'
import Profiles from '@/components/resumeEditor/Profiles'
import Career from '@/components/resumeEditor/Career'
import Contact from '@/components/resumeEditor/Contact'
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
      },
      userData: {}
    }
  },
  methods: {
  },
  beforeCreate () {
    this.api.getInfo().then((response) => {
      let data = response.data
      if (data.token === false) {
        this.token.removeToken()
        return this.$router.replace('/login')
      }
      if (data.data) {
        this.userData = data.data
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
