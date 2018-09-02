<template>
  <div class="case">
    <y-menu :opened-index="4" :isIndex="false" class="menu" @navClick="navClick"></y-menu>
    <y-banner ref="banner" title="案例展示" class="product-banner" :showTab="true" @changeTab="changeTab"></y-banner>
    <div class="case-container">
      <div v-show="currentIndex === 0">
        <div class="single-case">
          <div class="left">
            <h3>实景互动课堂的运用：景德镇中国陶瓷博物馆</h3>
            <p>2018年5月18日国际博物馆日，景德镇中国陶瓷博物馆联手景德镇教育局，由玮航教育全程提供技术和服务支撑，共同合办了一场别具特色“博物馆+互联网同步直播课堂”的活动，真正诠释了这一世界主题的涵义。通过教育信息化技术手段，搭建了博物馆与景德镇实验学校、一中、二中、五中、九中、昌河中学六所学校的智慧云教室的之间的超级链接——实景互动同步课堂。本次“陶瓷文化进课堂”在陶瓷博物馆的清代展厅开课，同学们在教室里就能身临其境地收看博物馆讲解员在清代展厅进行的现场解说，不仅能通过电子屏幕清晰地看到瓷器的样貌，还可以与讲解员进行互动问答。</p>
          </div>
          <div class="right">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-01.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-02.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-03.jpg" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-04.jpg" alt="">
                </div>
              </swiper-slide>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
          </div>
        </div>
        <div class="single-case">
          <div class="left">
            <h3>中心校带薄弱校：惠东县增光中心小学＋多祝增光中心小学和多祝大片地小学</h3>
            <p>常态化双师互动教学，是玮航教育打造的响应教育精准扶贫政策的“一校带多点”、“中心校带薄弱校”教学教研实践的重要创新方法。在惠州市惠东县增光中心小学+多祝增光中心小学和多祝大片地小学日常教学活动中，采取同步课堂的方法独创把双师互动教学常态化，该模式受到教育局、学校师生、家长的强烈好评和欢迎。</p>
          </div>
          <div class="right">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-05.jpg" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-06.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-07.jpg" alt="">
                </div>
              </swiper-slide>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
          </div>
        </div>
        <div class="single-case">
          <div class="left">
            <h3>同步课堂的应用：博罗县2018年小学数学区域主题性教研活动在湖镇中心小学成功举行</h3>
            <p>打通学校与学校、班级与班级之间的远程互动平台，可进行远程教研会议和同课异构活动。</p>
          </div>
          <div class="right">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-08.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-09.png" alt="">
                </div>
              </swiper-slide>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
          </div>
        </div>
        <div class="single-case">
          <div class="left">
            <h3>智慧云平台和VR全景直播的应用：2017年江西省教育信息化推进会</h3>
            <p>2017年12月12日的江西省教育信息化推进会活动议程中，景德镇陶瓷博物馆利用教育信息化设备（移动便携云主机）与景德镇实验学校进行了一场“陶瓷文化进课堂”的活动；通过智慧云平台和VR全景直播技术，对会议全过程进行了全程全景直播，通过手机端和远程会议的方法可观看会议。省委教育工委书记黄小华，省委教育工委副书记、省教育厅厅长叶仁荪，省委教育工委副书记肖志华一行出席并观摩，表示高度认可和赞扬。</p>
          </div>
          <div class="right">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-10-1.jpg" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-10-2.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-10-3.jpg" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-10-4.png" alt="">
                </div>
              </swiper-slide>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
          </div>
        </div>
        <div class="single-case">
          <div class="left">
            <h3>生涯规划体验课：惠州一中</h3>
            <p>为迎接新高考改革，高中生生涯规划教育成为综合素质考核中的重中之重。以华东师范大学心理学、教育学等教授为首组成生涯专家团队为学校教师上生涯师资培训课、学生体验生涯规划课程认知职业规划，课余通过升学一体机查阅职涯资讯。</p>
          </div>
          <div class="right">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-11-1.jpg" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-11-2.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-11-3.png" alt="">
                </div>
              </swiper-slide>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
          </div>
        </div>
        <div class="single-case">
          <div class="left">
            <h3>幼儿教育与校园阅读</h3>
            <p>与互动阅读平台联动的校园阅读荣誉榜<br>英语外教远程给幼儿园孩子上口语课<br>学生在未来虚拟课室的沉浸式表演</p>
          </div>
          <div class="right">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-12.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-13.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper-img">
                  <img src="@/assets/case-14.jpg" alt="">
                </div>
              </swiper-slide>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
          </div>
        </div>
      </div>
      <div v-show="currentIndex === 1">
        <div class="single-case">
          <div class="left">
            <h3>惠州乡村小学教师培训</h3>
            <p>尽管今日科技普及，教育资源仍属稀缺。2017年度惠州乡村小学教师培训班在惠州市惠城区开训，玮航教育为本届培训班提供VR全景视频直播服务，360°视觉彻底将本培训班的教室大门向全惠州的教室人群开放，真正实现将培训班上精彩内容实时实地传授给未能到场参与培训的教室，也进一步打破了空间给乡村教育培训带来的局限性，让培训班外的老师们通过高清4目摄像头即可再现学习场景，还原培训班的每处细节。</p>
          </div>
          <div class="right">
            <div class="swiper-img">
              <img src="@/assets/case-15.png" alt="">
            </div>
          </div>
        </div>
        <div class="single-case">
          <div class="left">
            <h3>第九届海峡两岸卫生与健康论坛</h3>
            <p>为共叙亲情乡谊、为共商融合发展、为共话民生福祉，第九届海峡论坛将于2017年6月17-18日在厦门隆重召开。论坛活动期间，玮航教育为本次论坛大会提供VR全景视频直播服务，凭借着出众的全景视频软硬件技术能力，竭尽全力为本次论坛的观众提供了一场无以伦比的VR全景视频视觉盛宴。</p>
          </div>
          <div class="right">
            <div class="swiper-img">
              <img src="@/assets/case-16.png" alt="">
            </div>
          </div>
        </div>
        <div class="single-case">
          <div class="left">
            <h3>厦门金砖会议重大活动</h3>
            <p>应急指挥调度平台——是为厦门金砖会议重大活动提供安全保障的项目。搭建无线图传系统平台，通过智能单兵APP、车载无线图传设备及4G执法记录仪，以实现随车全程影像监控传输系统及4G执法记录仪实时回传监控现场影像，指挥中心可依影像和卫星定位信号及数据及时作部署和调度，使得相关人员可以随时掌控现场动态，为处理各类突发事件提供实战支持。</p>
          </div>
          <div class="right">
            <div class="swiper-img">
              <img src="@/assets/case-17.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <y-footer :footer-type="0"></y-footer>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      currentIndex: 0,
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    }
  },
  methods: {
    changeTab (val) {
      this.currentIndex = val
    },
    navClick (idx) {
      this.currentIndex = idx
      this.$refs['banner'].activeNum = idx
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var";

  .case {
    .menu {
      background-color: inherit;
    }
    .product-banner {
      background-image: url(~@/assets/case-banner.png)
    }
    .case-container {
      padding-top: 100px;
      width: 960px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 60px;

      .single-case {
        border: 1px solid #979797;
        width: 100%;
        height: 560px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }
    }
    .left {
      width: 50%;
      // float: left;
      padding-left: 80px;
      padding-right: 80px;

      h3 {
        font-family: $font-family;
        font-size: 26px;
        color: #000000;
        margin-bottom: 20px;
        line-height: 40px;
      }
      p {
        font-family: $font-family;
        font-size: 16px;
        color: #000000;
        line-height: 28px;
      }
    }
    .right {
      width: 50%;
      padding-right: 80px;

      img {
        width: 100%;
      }
    }
    .swiper-img {
      display: flex;
      align-items: center;
      height: 300px;
    }
    .swiper-container:hover {
      transform: scale(1.2, 1.2);
    }
  }

  #mobile {
    .case {
      display: flex;
      flex-direction: column;
      .menu {
        background-color: white;
      }
      .case-container {
        width: 100%;
        .single-case {
          display: flex;
          flex-direction: column;
          .left {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
          }
          .right {
            width: 100%;
            padding-right: 0;
          }
        }
      }
    }
  }

</style>
