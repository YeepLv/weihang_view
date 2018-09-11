<template>
  <div id="yarticle" class="y-article">
    <div ref="articelContent" class="article-content">
      <div class="article-contain">
        <h2>{{ article.title }}</h2>
        <p class="time">{{ moment(article.publishTime).format('YYYY-MM-DD') }}</p>
        <div class="a-content" v-html="article.content">
        </div>
      </div>
      <div class="close-btn" @click="closeDialog">
        X
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'YArticle',
  props: ['article'],
  methods: {
    closeDialog () {
      this.$emit('closeArticle')
    }
  },
  data () {
    return {
      moment
    }
  }
}
</script>

<style lang="scss">
  #yarticle {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 10;
    background-color: rgba(0,0,0,.8);

    .article-content {
      position: relative;
      top: 90px;
      z-index: 10;
      width: 800px;
      height: 80vh;
      background: #fff;
      margin-left: auto;
      margin-right: auto;
      padding: 60px;
    }
    .close-btn {
      width: 65px;
      height: 65px;
      position: absolute;
      right: -65px;
      top: 0px;
      background: #0A96F0;
      font-size: 45px;
      text-align: center;
      line-height: 65px;
      font-weight: 300;
      color: #fff;
      cursor: pointer;
    }
    h2 {
      font-size: 28px;
      color: #000000;
      letter-spacing: 0;
      line-height: 42px;
    }
    .time {
      font-size: 14px;
      color: #666666;
      letter-spacing: 0.53px;
      margin-top: 20px;
      margin-bottom: 30px;
    }
    .content {
      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      line-height: 32px;
    }
    .article-contain {
      height: 100%;
    }
    .a-content {
      height: 78%;
      overflow-y: auto;
      p {
        line-height: 24px;
      }
      img {
        max-width: 100%;
      }
    }
  }
  #mobile {
    #yarticle {
      padding: 6.133333rem 1.5rem 1rem;
      background-color: rgba(0,0,0,.8);
      p {
        margin: 1rem 0;
      }
      .article-content {
        top: 0;
        width: 100%;
        height: 100%;
        padding: 2.666667rem 1rem;
        .article-contain {
          overflow-y: auto;
          height: 100%;
          .a-content {
            height: 75%;
            overflow-y: unset;
          }
        }
        .close-btn {
          top: -3rem;
          right: 0;
          width: 3rem;
          height: 3rem;
          line-height: 46px;
        }
      }
    }
  }
</style>
