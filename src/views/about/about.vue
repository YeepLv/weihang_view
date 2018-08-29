<template>
  <div class="pAbout">
    <y-menu :opened-index="5" :isIndex="false" class="menu" @navClick="navClick"></y-menu>
    <y-banner ref="banner" title="关于玮航" class="product-banner" :showTab="false"></y-banner>
    <div class="sub-menu">
      <span class="menu__text" @click="openedIndex = index" :class="{ 'current': index === openedIndex }" v-for="(tab, index) in tabArray" :key="tab">
        {{ tab }}
      </span>
    </div>
    <div>
      <div v-show="openedIndex === 0">
        <div class="first-page">
          <p>深圳市玮航教育科技有限公司（简称：玮航教育），是一家专注于为教育信息化提供综合解决方案的集成及服务运营商。集众家之长，淘天下之宝，玮航教育凭借独有的资源渠道和技术优势，打造了“互联网+教育”的先进模式。</p>
          <p>聚焦教育，公司致力于教育信息化技术的集成和研发，引入的TIVC-7智能视频编解码技术是国内视频压缩技术的领先者。在该技术的基础上，玮航教育研发了一系列教育信息化产品，加之集成市场上最优秀的相关配套产品，专注于K12教育与高校职业教育的信息化，并为其提供一揽子综合解决方案和运营服务，从而打造品牌玮航教育“五朵云解决方案”：智慧校园通信网云服务、远程互动教育云服务、平安校园云服务、新高考职业生涯教育云服务和班班通智慧教学云服务。从教育信息化建设的基础配套建设、应用模式、创新服务三大阶段，玮航教育均有完整的一站式服务方案，并为您提供定制化的服务和合作模式。</p>
          <p>聚焦教育，不止教育。玮航教育以做智慧教育为主，同时汇聚资源及技术专利优势，业务涵盖应急指挥系统、车联网、VR等领域。</p>
          <p>作为玮航教育旗下的控股子公司，广东小草科技有限公司（简称：小草科技）是玮航教育现阶段驻惠州市场的排头兵。小草科技享有玮航教育同级的技术支撑，同时围绕着信息技术与教育教学实践的深度融合应用，独立拥有多项专利和软件著作权。目前，小草科技已在惠州市落地学校和教育局共20余所，在当地具备一定的影响力。</p>
          <p>行科技之舟，渡中国教育之梦，玮航教育定位于“教育信息化的摆渡者”，旨在借助领先的信息技术和服务经验，着眼于教育精准扶贫，促进教育资源均衡化，将人间美好事物更有效地传递给普罗大众，用教育梦的实现以助力共享中国梦。</p>
        </div>
        <div class="about-bottom">
          <!-- <img src="@/assets/about-bottom.png" alt=""> -->
        </div>
      </div>
      <div v-show="openedIndex === 1">
        <div class="second-page">
          <div class="article" @click="articleDialogShow = true;currentArticle = article" v-for="(article,idx) in articleArray" :key="idx" :style="{ marginRight: (80 - (idx % 2) * 80) + 'px'}">
            <div>
              <img :src="article.articleImage" alt="">
            </div>
            <h4 class="ellipsis">
              {{ article.title }}
            </h4>
            <p class="ellipsis">{{ article.summary }}</p>
            <span>{{ moment(article.publishTime).format('YYYY-MM-DD') }}</span>
          </div>
        </div>
      </div>
      <div v-show="openedIndex === 2">
        <div class="third-page">
          <h1>招聘岗位</h1>
          <div style="margin-bottom: 40px">
            <span>职位：</span>
            <div class="type" @click="currentType = 0" :class="{ 'chosen-type': currentType === 0}">全部</div>
            <div class="type" @click="currentType = 1" :class="{ 'chosen-type': currentType === 1}">技术</div>
            <div class="type" @click="currentType = 2" :class="{ 'chosen-type': currentType === 2}">市场与销售</div>
            <div class="type" @click="currentType = 3" :class="{ 'chosen-type': currentType === 3}">职能</div>
          </div>
          <div style="margin-top: 20px;display: flex;flex-wrap: wrap">
            <div v-for="(post, idx) in postArray" @click="postDialogShow = true;currentPost = post" class="post" :key="idx" :style="{ marginRight: (40 - (idx % 2) * 40) + 'px'}" >
              <div class="tag"></div>
              <div class="job-content">
                <p style="margin-bottom: 10px;">{{ post.jobName }}</p>
                <span>经验5-10年/本科</span>
              </div>
              <div class="button">
                立即查看
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <y-article @closeArticle="articleDialogShow = false" :article="currentArticle" v-if="articleDialogShow"></y-article>
    <y-post @closeArticle="postDialogShow = false" :post="currentPost" v-if="postDialogShow"></y-post>
    <y-footer :footer-type="footerType"></y-footer>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  mounted () {
    this.$http.get('/api/website/article', {
      params: {
        pageNo: 1,
        pageSize: 10
      }
    }).then((res) => {
      this.articleArray = res.body.data.list
    })
    this.$http.get('/api/website/job', {
      params: {
        pageNo: 1,
        pageSize: 10
      }
    }).then((res) => {
      this.postArray = res.body.data.list
    })
  },
  data () {
    return {
      articleDialogShow: false,
      postDialogShow: false,
      openedIndex: 0,
      tabArray: ['公司介绍', '新闻中心', '招贤纳士'],
      articleArray: [],
      currentArticle: {},
      currentPost: {},
      moment,
      currentType: 0,
      postArray: [],
      footerType: 2
    }
  },
  watch: {
    openedIndex (val) {
      if (val === 0) {
        this.footerType = 2
      } else {
        this.footerType = 0
      }
    }
  },
  methods: {
    navClick (idx) {
      this.openedIndex = idx
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/var";
@import "~@/styles/mixin";

.pAbout {
  position: relative;
  .y-menu {
    top: 80px;
  }
  .menu {
    background-color: inherit;
  }
  .product-banner {
    background-image: url(~@/assets/case-about-banner.png);
    background-size: 100% 100%;
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
  .first-page {
    width: 960px;
    margin-right: auto;
    margin-left: auto;

    p {
      font-family: $font-family;
      font-size: 16px;
      color: #000000;
      line-height: 32px;
      text-indent: 2em;
    }
  }
  .about-bottom {
    background: url(~@/assets/about-bottom.png);
    width:100%;
    height:337px;
  }
  .ellipsis {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .second-page {
    width: 960px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;

    .article {
      margin-bottom: 60px;
      width: 440px;
      img {
        width: 440px;
        height: 280px;
      }
      h4 {
        font-family: $font-family;
        font-size: 28px;
        color: #000000;
        letter-spacing: 0;
        line-height: 38px;
        width: 100%;
      }
      p {
        font-family: $font-family;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        text-align: justify;
        line-height: 32px;
        margin-bottom: 30px;
      }
      span {
        font-family: $font-family;
        font-size: 16px;
        color: #999999;
        letter-spacing: 0;
        line-height: 18px;
      }
    }
  }
  .third-page {
    width: 960px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 60px;

    h1 {
      text-align: center;
      font-size: 48px;
      margin-top: 80px;
      margin-bottom: 60px;
    }
    .type {
      min-width: 40px;
      height: 24px;
      background: #fff;
      display: inline-block;
      text-align: center;
      border-radius: 2px;
      padding-left: 8px;
      padding-right: 8px;
      line-height: 24px;
      margin-right: 20px;
      cursor: pointer;
    }
    .chosen-type {
      background: #6cc2fa;
      color: #fff;
    }
    .post {
      width: 460px;
      height: 92px;
      border: 1px solid #E9E9E9;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .tag {
      width: 5px;
      height: 100%;
      background-image: linear-gradient(-135deg, #0A96F0 0%, #00DCF0 100%);
    }
    .job-content {
      width: 60%;
    }
    .button {
      color: #000;
      padding: 1px 15px;
      border-radius: 20px;
      height: 30px;
      border: 1px solid #000;
      line-height: 30px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
</style>
