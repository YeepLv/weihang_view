<template>
  <div class="pSolution">
    <y-menu :opened-index="2" :isIndex="false" class="menu" @navClick="navClick"></y-menu>
    <y-banner ref="banner" title="方案中心" class="product-banner" :showTab="true" @changeTab="changeTab"></y-banner>
    <div v-show="currentIndex === 0">
      <div class="sub-menu" v-if="!isMobile">
        <span class="menu__text" @click="openedIndex1 = index" :class="{ 'current': index === openedIndex1 }" v-for="(tab, index) in tabArray" :key="tab">
          {{ tab }}
        </span>
      </div>
      <y-mobile-submenu v-if="isMobile" :tab-list="tabArray" @tabChanged="tabChanged"></y-mobile-submenu>
      <div class="content-container" :style="{paddingBottom: (openedIndex1 === 2 || isMobile) ? '0px' : '120px'}">
        <div class="content" v-show="openedIndex1 === 0">
            <h2>“五朵云”一站式解决方案</h2>
            <div>
              <img src="@/assets/solution-1.png" alt="">
            </div>
            <p>
              玮航教育从教育信息化建设的基础配套、应用模式、创新服务三大重要阶段，均有提供完整的一站式服务解决方案，命名为“玮航教育云”。目前，玮航教育云共有“五朵云”，每一朵“云”都能有相对应的功能和解决方案，在教育信息化建设三大阶段中“五朵云”相辅相成。针对不同客户需求提供多样化、定制化的服务选择和合作模式，以期双赢，这是玮航教育独有的竞争优势。
            </p>
          </div>
        <div class="content" v-show="openedIndex1 === 1">
          <h2>“中心校带薄弱校，一校带多点”<br v-if="!isMobile"/>的教育精准扶贫模式的痛点</h2>
          <div>
            <img src="@/assets/solution-2-1.png" alt="">
          </div>
          <p>
            玮航教育针对“一校带多校，一校带多点”的教学和教研组织模式进行了深度的实践调研，并为解决教育精准扶贫中出现的三大痛点难题制定了完善的解决方案：通过搭建智能化云教室和常态化云教室、校级资源管理平台、集控中心、智慧校园APP，从而解决了学校结构性缺教师和师资水平不均带来的问题，以及教学点管理不集中而缺乏时效、学生上课难和课余获取教学资源有限等重大难题。在教育信息化硬件设施搭建完备的基础上，创设同步课堂、专递课堂和双师课堂模式实现各校个教学点之间的教学实践得以远程实时互动。其中，双师教学模式是教育精准扶贫实践中的重要创新模式。
          </p>
          <div>
            <img src="@/assets/solution-2-2.png" alt="">
          </div>
          <p>
            与传统的双师模式不同，玮航教育独创常态化双师教学模式，是玮航教育在教育精准扶贫方面的特色服务模式。即将远程双师教学模式在K12教育体制内实现常态化，使双师教学的模式不再仅仅是培训机构或“培优”的专利，从而成为“互联网+教育”的大时代背景下体制内教育的全新教学模式。是要让双师教学常态性地在学校开展起来，而不是试验性的，可以落到资源相对薄弱区域的每个教室、每堂课和每个教师和学生中去，它是一个可执行的教学过程，可以逐一个学期开展起来。这对于教育精准扶贫来说，有着实践落地的重要意义。
目前，玮航教育常态化双师教学特色模式已在惠州多所学校实践应用，并获得当地教育局、教师和学生、家长的一致好评，该教学模式还为学校在各类教研评比活动中赢得诸多奖项。
          </p>
        </div>
        <div v-show="openedIndex1 === 2">
          <div class="content">
            <h2>“1+2+3”体系智慧校园</h2>
            <img src="@/assets/solution-3-1.png" alt="">
            <p>
              针对教育现状及痛点，玮航智慧教育解决方案在“1+2+3”体系的基础上建立整体规划，利用先进的多媒体互动录播技术，独创优质教育资源云共享体系，为教育精准扶贫，实现教育资源普及化、均衡化、共享化助力。同时，创新教学模式，打造特色教育品牌，也是玮航智慧教育解决方案的重要部分。
            </p>
          </div>
          <div class="content"  style="background: #F9F9F9">
            <h2>优质教育资源共享体系</h2>
            <img src="@/assets/solution-3-2.png" alt="">
            <p>
              在智能化云课堂、常态化云课堂、简易云课堂、3D虚拟云课堂、移动云课堂等硬件配套设施完备基础上，通过智慧云平台完成校本资源、区域资源建设和完善，提供优质资源精准分类、实时点播、阅读推送等功能，构筑优质教育资源共享体系，真正实现教育的均衡化和共享化
            </p>
          </div>
          <div class="content">
            <h2>基于教学可视化的应用方案模式</h2>
            <img src="@/assets/solution-3-3.png" alt="">
            <p>
              1+A模式：以智慧云课堂为中心，通过常态化云课堂进行优质资源覆盖；
            </p>
            <p>
              1+N模式：在1+A模式上，引入多种不同场景的互动课堂教学；
            </p>
            <p>
              1+X模式：在1+N模式上，整合多种第三方优质应用(如电子书包、电子班牌、平安校园、一卡通、教务系统、智慧图书馆等)
            </p>
          </div>
          <div class="content" style="background: #F9F9F9" :style="{paddingBottom: openedIndex1 === 2 && !isMobile ? '120px' : ''}">
            <h2>应用延伸</h2>
            <div class="application">
              <div class="sub-content">
                <h3>开放性课堂</h3>
                <div style="height: 70px">
                  <p>通过双师课堂、同步课堂、专递课堂等形式实现师资资源共享</p>
                </div>
                <img src="@/assets/solution-3-4-1.png" alt="">
                <h3>在线家长会</h3>
                <p>通过阶段性的在线家长会，或主题班会，建立起常态化家校沟通机制，有效引导家长对学生的学习监督</p>
              </div>
              <div class="sub-content">
                <h3>课件众评</h3>
                <div style="height: 70px">
                  <p>通过在线众评，来发现教学的问题和不足</p>
                </div>
                <img src="@/assets/solution-3-4-2.png" alt="">
                <h3>资源共享</h3>
                <p>通过课堂的直播，建立跨校的交流、资源共享，同时也能提高老师的教学水平和教学质量</p>
              </div>
              <div class="sub-content">
                <h3>资源建设</h3>
                <div style="height: 70px">
                  <p>微课资源、优课资源，课件资源的汇聚分类发布</p>
                </div>
                <img src="@/assets/solution-3-4-2.png" alt="">
                <h3>各类大型活动的直播</h3>
                <p>提高学校的知名度、提升教师的荣誉感，对提高老师的教学热情也会有一定的影响</p>
              </div>
              <div class="sub-content">
                <h3>老师个人空间建设</h3>
                <div style="height: 70px">
                  <p>通过个人空间，能快速实现资源精准推送，方便学生学习，难点、疑惑点的快速解决</p>
                </div>
                <img src="@/assets/solution-3-4-2.png" alt="">
                <h3>教学资源决策</h3>
                <p>教学资源的均衡
                  <br/>教学对象匹配
                  <br/>教师业务的协同
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-show="openedIndex1 === 3">
          <div class="content">
            <h2 style="margin-bottom: 60px;">新高考改革带来的变化</h2>
            <img src="@/assets/solution-4-1.png" alt="">
          </div>
          <div class="content" style="background: #F9F9F9">
            <h2 style="margin-bottom: 60px;">高中生涯教育整体解决方案</h2>
            <img src="@/assets/solution-4-2.png" alt="">
            <p>面对改革，玮航教育为学校、教师和学生制定了一整套“新高考一站式整体解决方案”，以生涯规划教育作为迎接新高考改革的切入点且直击痛点，面临和适应新高考改革将不再迷茫 。目前，福建、浙江、上海、广西、广东、湖南、河北、陕西、四川、江西等全国十余省份已开始引入该服务。</p>
          </div>
          <div class="content">
            <h2 style="margin-bottom: 60px;">我们的优势</h2>
            <div class="text-block">
              <div class="text-container" style="margin-right: 70px;">
                <h3>自主研发的服务平台</h3>
                <p>PC端、APP端、微信端均可使用，基础信息、生涯教学、生涯测评、生涯成长四大管理系统构筑信息化云平台，使教学个性化</p>
              </div>
              <div class="text-container">
                <h3>生涯规划教学资源包</h3>
                <p>数字化教育资源、职业/专业/院校信息、生涯微课视频资源库、生涯课件资源库……海量线上教学资源有专业团队一网打尽</p>
              </div>
              <div class="text-container" style="margin-right: 70px;">
                <h3>高中智能硬件设备</h3>
                <p>教育局指导一体机、高中升学一体机，碎片化管理和碎片化校园学习，成果都在潜移默化之中</p>
              </div>
              <div class="text-container">
                <h3>权威编撰的系列教材</h3>
                <p>由华东师范大学专家团队开发，北京教育科学出版社出版，历经2年调研、修订，完全针对“新高考”高中生编写，结合“中国·校园在线”网络学习空间</p>
              </div>
              <div class="text-container">
                <h3>专业的师资培训</h3>
                <p>以华东师范大学心理学、教育学等教授为首组成生涯专家团队，以线上融合线下的服务模式，为高中提供全方位的生涯师资培训服务</p>
              </div>
              <div style="clear:both;margin-bottom: 0px;"></div>
            </div>
          </div>
        </div>
        <div class="content" v-show="openedIndex1 === 4">
          <h2 style="margin-bottom:60px">平安校园智慧管理平台</h2>
          <img src="@/assets/solution-5.png" alt="">
          <p>玮航平安校园应急指挥系统的建设，是以校园视频监控为核心的大安防系统、在物联网、互联网、大数据的基础上、运用国内领先的TIVC-7视频编解码独有专利技术，搭建一个系统化、智能化、统一的，集校园安全监管、校车管理、风险智能化监测、应急调度、安全教育云平台为一体的生态系统。</p>
        </div>
        <div class="content" v-show="openedIndex1 === 5">
          <h2 style="margin-bottom:60px">智慧运动场</h2>
          <img src="@/assets/solution-6.png" alt="">
          <p>智慧运动场能实现一站式赛事全景直播服务，安装简单，维护方便。系统提供全景与感兴趣区域特写融合直播，可以让观众获得沉浸式的VR全景体验，也可以获得感兴趣区域的特写效果。</p>
          <div v-if="!isMobile" class="feature-container">
            <div class="feature-block" style="margin-right: 25px;margin-bottom: 20px;">
              赛事全景直播
            </div>
            <div class="feature-block" style="margin-right: 25px;margin-bottom: 20px;">
              赛事特写直播
            </div>
            <div class="feature-block" style="margin-right: 25px;margin-bottom: 20px;">
              赛球自动跟踪
            </div>
            <div class="feature-block" style="margin-bottom: 20px;">
              赛事全景录像
            </div>
            <div class="feature-block" style="margin-right: 25px">
              赛事微信分享
            </div>
            <div class="feature-block" style="margin-right: 25px">
              移动端手机观看
            </div>
            <div class="feature-block">
              赛事运营支撑服务
            </div>
            <div style="clear:both"></div>
          </div>
          <div v-if="isMobile" class="feature-container">
            <div class="feature-block">
              赛事全景直播
            </div>
            <div class="feature-block">
              赛事特写直播
            </div>
            <div class="feature-block">
              赛球自动跟踪
            </div>
            <div class="feature-block">
              赛事全景录像
            </div>
            <div class="feature-block">
              赛事微信分享
            </div>
            <div class="feature-block">
              移动端手机观看
            </div>
            <div class="feature-block">
              赛事运营支撑服务
            </div>
            <div style="clear:both"></div>
          </div>
        </div>
        <div v-show="openedIndex1 === 6">
          <div class="content">
            <h2>关注教学空间<br/>新维学习空间站服务</h2>
            <img src="@/assets/solution-7-1.png" alt="">
            <p>
              互联网+时代的教学视觉变革，打造未来智能教室的学习空间。
            </p>
          </div>
          <div class="content" style="background: #F9F9F9">
            <h2>关注优质教学资源的使用和精准推送<br/>伴学网教育平台服务</h2>
            <img src="@/assets/solution-7-2.png" alt="">
            <p>
              海量优质教育资源的共建共享和教与学的实时跟踪分析，为师生提供了减负高效的各种模式选择。除PC/手机端外使用外，伴学网机顶盒可与广电、运营商合作，搭建简易智慧云课堂，学生在家通过电视便能点播所有资源等。
            </p>
          </div>
          <div class="content">
            <h2>关注校园阅读<br/>多媒体互动阅读平台服务</h2>
            <img src="@/assets/solution-7-3.png" alt="">
            <p>
              打造“书香校园”典范，助力学校补全“阅读生态链”，让孩子有书可读，让孩子有动力读书。智造多重阅读动力，做新时期教育的超级“阅读助教”。
            </p>
          </div>
          <div class="content" style="background: #F9F9F9">
            <h2>关注幼儿成长<br/>幼儿教育一站式服务</h2>
            <img src="@/assets/solution-7-4.png" alt="">
            <p>
              构建统一的以云计算为基础的幼儿园信息平台，汇集了丰富的幼儿园各类管理数据及幼教课程资源，专业外教远程上课；运用AR+VR技术，创设未来教室，通过沉浸式教学提高幼儿学习兴趣。
            </p>
          </div>
          <div class="content">
            <h2>关注直播场景百分百呈现<br/>VR全景直播服务</h2>
            <img src="@/assets/solution-7-5.png" alt="">
            <p>
              为各类赛事、会议、课堂等提供VR全景直播服务，用户通过手机、电脑在线实时观看720度直播画面。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-show="currentIndex === 1">
      <div class="sub-menu" v-if="!isMobile">
        <span class="menu__text" @click="openedIndex2 = index" :class="{ 'current': index === openedIndex2 }" v-for="(tab, index) in tabArray2" :key="tab">
          {{ tab }}
        </span>
      </div>
      <y-mobile-submenu v-if="isMobile" :tab-list="tabArray2" @tabChanged="tabChanged2"></y-mobile-submenu>
      <div class="content-container">
        <div class="content" v-show="openedIndex2 === 0">
          <h2>应急指挥调度系统<br/>让安防进入“视联网+”时代</h2>
          <div>
            <img src="@/assets/solution-8.png" alt="">
          </div>
          <p>
            融合4G/WIFI/卫星网络覆盖，保障大范围、远距离通信；应用于大面积、重大安全事故或灾难，以及突发事故、重大活动的紧急指挥、调度系统。
          </p>
        </div>
        <div class="content" v-show="openedIndex2 === 1">
          <h2>车联网<br/>让车辆安全和管理可视化</h2>
          <div>
            <img src="@/assets/solution-9-1.png" alt="">
          </div>
          <p style="margin-bottom: 90px;">
            车联网云系统是针对车辆运营企业特点，提出的一套整体的解决方案。融安全监控和行业服务为一体，在满足车辆运营管理部门提供视频监控、营运管理、车辆管理等监管要求，来帮助企业管理者全面的优化车辆运营规划，保障车辆安全，提升企业形象等目的。
玮航教育运用独有的车联网技术的基础上，建设平安校园校车安全管理系统，是车联网技术的一大创新应用。
          </p>
          <div>
            <img src="@/assets/solution-9-2.png" alt="">
          </div>
        </div>
        <div class="content" v-show="openedIndex2 === 2">
          <h2>VR+场景应用</h2>
          <div>
            <img src="@/assets/solution-10.png" alt="">
          </div>
          <p>
            结合多年视频领域的经验，全力打造了VR+视频系列产品，帮助内容制作方完成优质的视频内容。
          </p>
        </div>
      </div>
    </div>
    <y-footer :footer-type="footerType"></y-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      currentIndex: 0,
      openedIndex1: 0,
      openedIndex2: 0,
      footerType: 0,
      tabArray: ['总体方案', '双师教学', '智慧教育', '生涯教育', '平安校园', '智慧运动场', '特色服务'],
      tabArray2: ['应急指挥调度系统', '车联网', 'VR+场景应用']
    }
  },
  watch: {
    '$route' (to, from) {
      this.featherIndex = 0
    },
    openedIndex1 (val) {
      if (val === 2) {
        this.footerType = 1
      } else {
        this.footerType = 0
      }
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'isMobile'
    })
  },
  methods: {
    changeTab (val) {
      this.currentIndex = val
    },
    tabChanged (val) {
      this.openedIndex1 = val
    },
    tabChanged2 (val) {
      this.openedIndex2 = val
    },
    navClick (idx) {
      this.currentIndex = idx
      this.$refs['banner'].activeNum = idx
    }
  },
  mounted () {
    if (this.$route.params.index) {
      this.openedIndex1 = this.$route.params.index
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";

.pSolution {
  .menu {
    background-color: inherit;
  }
  .sub-menu {
    height: 80px;
    padding-top: 20px;
    text-align: center;

    .menu__text {
      font-family: $font-family;
      font-size: 16px;
      color: #000000;
      text-align: center;
      margin-right: 55px;
      cursor: pointer;
      position: relative;
    }
  }
  .current {
    color: #0a96f0 !important;
  }
  .current:after {
    content: '';
    bottom: -20px;
    left: -1px;
    position: absolute;
    width: 100%;
    height: 4px;
    background-image: linear-gradient(-90deg, #18C7F9 0%, #0A96F0 100%);
  }
  .product-banner {
    background-image: url(~@/assets/solution-banner1.png)
  }
  .application {
    display:flex;
    justify-content: space-between;
    width:960px;
    margin-left:auto;
    margin-right:auto;
  }
  .content-container {
    padding-bottom: 60px;
  }
  .content {
    padding-top: 80px;
    text-align: center;
    padding-bottom: 60px;
    h2 {
      font-family: $font-family;
      font-size: 48px;
      color: #000000;
      margin-bottom: 60px;
      line-height: 80px;
    }
    h3 {
      font-family: $font-family;
      font-size: 24px;
      color: #000000;
      margin-bottom: 20px;
    }
    div {
      margin-bottom: 60px;
    }
    img {
      margin-bottom: 30px;
    }
    p {
      display: inline-block;
      width: 960px;
      text-align: left;
      font-family: $font-family;
      font-size: 16px;
      color: #000000;
      line-height: 32px;
    }
    .sub-content {
      width: 198px;
      display: inline-block;
      text-align: left;
      p {
        width: 100%;
      }
    }
  }
  .text-block {
    width: 960px;
    margin-left: auto;
    margin-right: auto;

    .text-container {
      width: 440px;
      border-radius: 8px;
      border: 1px solid #00DCF0;
      height: 220px;
      float: left;
      padding: 30px 50px;
      margin-bottom: 30px;
      text-align: left;
    }
    h3 {
      font-family: $font-family;
      font-size: 34px;
      color: #0A96F0;
    }
    p {
      font-family: $font-family;
      font-size: 16px;
      color: #000000;
      line-height: 28px;
      width: 100%;
    }
  }
  .feature-container {
    width: 960px;
    margin-left:auto;
    margin-right:auto;
    margin-top: 40px;
  }
  .feature-block {
    background-image: linear-gradient(-135deg, #0A96F0 0%, #00DCF0 100%);
    border-radius: 8px;
    width: 220px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-family: $font-family;
    font-size: 18px;
    color: #FFFFFF;
    float: left;
  }
}

#mobile {
  .pSolution {
    .menu {
      background-color: #fff;
    }
    .application {
      width: 100%;
      flex-wrap: wrap;

      h3 {
        font-size: 1rem;
      }
      p {
        font-size: .5rem;
        line-height: 1.2rem;
      }
      .sub-content {
        width: 45%;
      }
    }
    .content {
      padding-top: 40px;
      padding-left: 20px;
      padding-right: 20px;

      div {
        margin-bottom: 10px;
      }
      h2 {
        line-height: 2rem;
      }
      p {
        width: 100%;
        line-height: 1.5rem;
      }
    }
    img {
      width: 100%;
    }
    .text-block {
      width: 100%;

      .text-container {
        width: 100%;
        height: 160px;
        padding: 15px 30px;
      }
    }

    .feature-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .feature-block {
        width: 49%;
      }
    }
  }
}
</style>


