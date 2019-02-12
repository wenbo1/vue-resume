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
          github: 'https://github.com/lyttonlee/learn'
        },
        {
          title: 'node-express-server',
          subTitle: '电商代理商城服务端',
          skills: 'node express mongoose mongodb express-promise-router ',
          text: '这是代理商城项目的服务端，express框架,数据库为mongodb3.4,使用async/await语法，使用express-promise-router统一捕获error，七牛云作为图片存储空间，开发中用到RoBo 3T,postman等工具，功能也完全响应代理商城客户端!',
          github: 'https://github.com/lyttonlee/learn'
        }
      ],
      career: [
        {
          time: '2010-2013',
          text: '从事工业产品设计，主要对产品的外形、拼装等的合理设计，对多种软件如PS、CAD、ProE等使用较多！'
        },
        {
          time: '2013-2016',
          text: '从事于矿业公司业务部门，主要是对矿山机械的采购、运行、维护等工作，期间开始接触互联网行业！'
        },
        {
          time: '2017-至今',
          text: '一直在学习互联网及编程知识，有过合伙创业的想法并付诸实践，终因经验不足及众多问题而停止'
        }
      ],
      contact: {
        experience: '并无互联网行业实际工作经验，但写过多个Demo以及开发过自己喜欢的应用后对前后端分离、模块化、组件化、代码层次等的重要性有一定理解！',
        evaluation: '高效的自学能力,具备独立分析解决问题能力强烈的自我驱动力,知识社区依耐者',
        // hobby: [],
        email: 'lzr3278@163.com',
        tel: '15181589155',
        socials: [
          {
            url: 'https://github.com/lyttonlee',
            icon: 'icon-GitHub'
          },
          {
            url: 'https://segmentfault.com/u/siwuweihesi',
            icon: 'icon-sf'
          },
          {
            url: 'https://www.zhihu.com/people/li-zai-rong-27/activities',
            icon: 'icon-zhihu'
          },
          {
            url: 'https://blog.csdn.net/weixin_43760383',
            icon: 'icon-csdn'
          }
        ]
      }
    }
  }
}
</script>
