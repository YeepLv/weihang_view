<template>
  <div class="product">
    <y-menu :opened-index="1" :isIndex="false" class="menu"></y-menu>
    <y-banner title="产品中心" class="product-banner" :showTab="false"></y-banner>
    <template v-for="(sec, index) in sections">
      <y-section-common :data="sec" :isEven="index%2===1"></y-section-common>
    </template>
    <y-footer :footer-type="0"></y-footer>
  </div>
</template>

<script>
import znh from '@/assets/product-znh.png'
import cth from '@/assets/product-cth.png'
import hw from '@/assets/product-hw.png'
import ytj from '@/assets/product-ytj.png'
import xgk from '@/assets/product-xgk.png'

export default {
  data () {
    return {
      sections: [{
        name: '智能化云教室',
        desc: ['精品课程录制', '多点远程教学交互', '跨终端音视频互动', '本地多画面预览', '教学评估', '辅助教学', '校际互联', '教学课程大规模直播/点播'],
        url: znh
      }, {
        name: '常态化云教室',
        desc: ['常态化课程的录制', '多点实时远程教学交互', '教学活动大规模直播/点播', 'VR全景课堂互动直播', '跨终端音视频互动', '在线家长会', '集中巡课', '校际互联'],
        url: cth
      }, {
        name: '户外实景教室',
        desc: ['支持4G(联通、移动、电信)，WIFI连接', '内置电源', '具有4G移动网络接入模块', '断线能自动重连接', '开放课堂：课堂不再局限于室内，更加开放的课堂', '多场景采编：空中(无人机)、地面(高清摄像机)多场景的采播'],
        url: hw
      }, {
        name: '高中升学一体机',
        desc: ['数据信息与生涯规划教育信息化平台', '学生功能模块：生涯测评、生涯选科、生涯课程、升学信息、志愿填报、生涯资讯、生涯智库(职业、专业、院校)等', '学校功能模块：学校基础信息展示、学校通知、学校新闻等', '可放置于学校走廊、班级、图书馆、电脑室', '学生在一体机上的使用数据可统计、可分析'],
        url: ytj
      }, {
        name: '新高考生涯教育系列教材',
        desc: ['由华东师范大学专家团队开发', '由北京教育科学出版社出版', '历经2年调研、修订', '完全针对“新高考”高中生编写', '结合“中国·校园在线”网络学习空间'],
        url: xgk
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  .menu {
    background-color: inherit;
  }
  .product-banner {
    background-image: url(~@/assets/product-banner.png)
  }
}
</style>
