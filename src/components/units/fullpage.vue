<template>
  <div>
    <div :id="pageId">
      <slot></slot>
    </div>
    <ul id="navBar">
      <li>0</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'YFullpage',
  props: ['pageId'],
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.pageId)
    // const runPage = new FullPage({
    //   id: this.pageId,
    //   slideTime: 800,                               // time of slide
    //   continuous: false,                            // create an infinite feel with no endpoints
    //   effect: {                                     // slide effect
    //     transform: {
    //       translate: 'Y',                      // 'X'|'Y'|'XY'|'none'
    //       scale: [0.1, 1],                      // [scalefrom, scaleto]
    //       rotate: [0, 0]                       // [rotatefrom, rotateto]
    //     },
    //     opacity: [0, 1]                       // [opacityfrom, opacityto]
    //   },
    //   mode: 'wheel,touch,nav:navBar',               // mode of fullpage
    //   easing: 'ease',                               // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];
    //   start: 1          // which page will display when install
    //       //  ,onSwipeStart : function(index, thisPage) {   // callback onTouchStart
    //       //    return 'stop';
    //       //  }
    //       //  ,beforeChange : function(index, thisPage) {   // callback before pageChange
    //       //    return 'stop';
    //       //  }
    //       //  ,callback : function(index, thisPage) {       // callback when pageChange
    //       //    alert(index);
    //       //  };
    // })
  }
}
</script>
<style lang="scss" scoped>
    .page {
      display: none;
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }
    .contain {
      width: 100%;
      height: 100%;
      display: none;
      position: relative;
      z-index: 0;
    }
    .current .contain,.slide .contain {
      display: block;
    }
    .current {
      display: block;
      z-index: 1;
    }
    .slide {
      display: block;
      z-index: 2;
    }
    .swipe {
        display: block;
        z-index: 3;
        transition-duration: 0ms !important;
        -webkit-transition-duration: 0ms !important;
    }
    .page1 {
      background: #37c1e3;
    }
    .page2 {
      background: #009922;
    }
    .page3 {
      background: #992211;
    }
    .page4 {
      background: #ff00ff;
    }
    .page5 {
      background: #00ff00;
    }
    .page6 {
      background: #22ffff;
    }
    #navBar {
      z-index: 3;
      position: absolute;
      top: 10%;
      right: 3%;
    }
    #navBar .active {
        background: #ccc;
    }
    #navBar li {
        cursor: pointer;
        margin-bottom: 10px;
        transition: all .7s ease;
        border-radius: 50%;
        line-height: 40px;
        text-align: center;
        width: 40px;
        height: 40px;
    }
    p {
        width: 200px;
        height: 100px;
        color:#fff;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -100px;
        margin-top: -50px;
        opacity: 1;
        transition: all .8s ease;
        transform-origin: 50% 50%;
    }
    .step1 p {
        transform: translate(0, -50px);
        -webkit-transform: translate(0, -50px);
    }
    .step2 p {
        opacity: 0;
        transform: scale(2);
        -webkit-transform: scale(2);
    }
    .step3 p {
        transform: scale(1);
        -webkit-transform: scale(1);
        opacity: 1;
    }
    .step4 p {
        -webkit-transform: rotate(360deg) translate(0,-200px) scale(.3);
        transform: rotate(360deg) translate(0,-200px) scale(.3);
        opacity: 0;
    }
</style>