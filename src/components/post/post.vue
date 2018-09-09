<template>
  <div ref="ypost" class="y-article">
    <div ref="postContent" class="article-content">
      <h2>{{ post.jobName }}</h2>
      <p>{{ post.experience }}</p>
      <!--<p class="time">{{ moment(post.updateTime).format('YYYY-MM-DD') }}</p>-->
      <div v-html="post.desc" class="article-desc">
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
  name: 'YPost',
  props: ['post'],
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

<style lang="scss" scoped>
  .y-article {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 10;
    background-color: rgba(0,0,0,.5);

    .article-content {
      position: relative;
      top: 90px;
      z-index: 10;
      width: 800px;
      height: 800px;
      background: #fff;
      margin-left: auto;
      margin-right: auto;
      padding: 60px;
      h2 {
        margin-bottom: 25px;
      }
      p {
        margin-bottom: 40px;
      }
      .article-desc {
        font-size: 16px;
        color: #333333;
        letter-spacing: 0.61px;
      }
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
  }
  #mobile {
    .y-article {
      padding: 6.133333rem 1.5rem;
      background-color: rgba(0,0,0,.8);
      .article-content {
        top: 0;
        width: 100%;
        height: 100%;
        padding: 2.666667rem 1rem;
        p {
          margin-bottom: 1.333333rem;
        }
        .article-desc {
          font-size: 0.533333rem;
          color: #333333;
          letter-spacing: 0.61px;
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
