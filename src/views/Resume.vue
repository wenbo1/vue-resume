<template>
  <Resume>
    <Info :Info="info"/>
    <Skills :Skills="skills"/>
    <Profiles :Profiles="profiles"/>
    <Career :Career="career"/>
    <Contact :Contact="contact"/>
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
      info: {
        name: '肖文波',
        avatar,
        introduce: '博学之,审问之,慎思之,明辨之,笃行之',
        status: [
          {
            icon: 'icon-icon-',
            value: '湖南'
          },
          {
            icon: 'icon-xueli',
            value: '大专'
          },
          {
            icon: 'icon--jiehun',
            value: '未婚'
          },
          {
            icon: 'icon-zhiwei',
            value: '离职'
          }
        ]
      },
      skills: ['Vue', 'Vue-Router', 'Vuex', 'React', 'React-Native', 'NodeJs', 'JavaScript', 'MongoDB', 'Html5', 'Css3', 'Koa2', 'MpVue', 'Ubuntu', 'Webpack', 'electron', 'express', 'git'],
      profiles: [
        {
          title: 'vue商城',
          subTitle: '一个简单的PC-WEB电商代理商城',
          skills: 'vue vue-router vuex axios qiniu echart element-ui mavon-editor',
          text: '这个代理商城项目有完整的前后端页面，基本实现了商城的所有功能，用户登录注册，状态管理，商品分类展示搜索，用户购买、发货，后端页面也完全实现了网站整体设置，用户统计，购买统计，商品管理、用户管理、订单管理等的功能！',
          github: 'https://github.com/wenbo1'
        },
        {
          title: 'vue商城',
          subTitle: '一个简单的PC-WEB电商代理商城',
          skills: 'vue vue-router vuex axios qiniu echart element-ui mavon-editor',
          text: '这个代理商城项目有完整的前后端页面，基本实现了商城的所有功能，用户登录注册，状态管理，商品分类展示搜索，用户购买、发货，后端页面也完全实现了网站整体设置，用户统计，购买统计，商品管理、用户管理、订单管理等的功能！',
          github: 'https://github.com/wenbo1'
        }
      ],
      career: [
        {
          time: '2015-2018',
          text: '在校学习软件编程，对前端开发有浓厚兴趣，开始深入学习前端，寻找前端开发实习岗位'
        },
        {
          time: '2018-至今',
          text: '在长沙爱登网络科技有限公司担任前端开发工程师'
        }
      ],
      contact: {
        experience: '一年工作经验对前后端分离、模块化、组件化、代码层次等的重要性有一定理解！',
        evaluation: '高效的自学能力,具备独立分析解决问题能力强烈的自我驱动力',
        // hobby: [],
        email: '1228925989@qq.com',
        tel: '17674170428',
        socials: [
          {
            url: 'https://github.com/wenbo1',
            icon: 'icon-GitHub'
          },
          {
            url: '',
            icon: 'icon-sf'
          },
          {
            url: '',
            icon: 'icon-zhihu'
          },
          {
            url: '',
            icon: 'icon-csdn'
          }
        ]
      }
    }
  }
}
</script>
