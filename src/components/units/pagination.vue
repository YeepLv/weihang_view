<template>
  <div class='y-pagination'>
    <div class='pagination-btn' @click='clickPrev' :class='{disable:currentpage === 1}'>
      <span class="page-icon iconfont icon-ic_pagination_left"></span>
    </div>
    <div class='pagination-page'>
      <span v-for='(item,index) in pages' :class='{active:currentpage === item}' @click='clickCurrent(item)'>{{item}}</span>
    </div>
    <div class='pagination-btn' @click='clickNext' :class='{disable:currentpage === allpage}'>
      <span class="page-icon iconfont icon-ic_pagination_right"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'YPagination',
    computed: {
      pages: function () {
        const arr = []
        if (this.allpage > 4) {
          if (this.currentpage + 4 > this.allpage) {
            for (let i = this.currentpage; i <= this.allpage; i++) {
              arr.push(i)
            }
          } else {
            for (let i = this.currentpage; i < this.currentpage + 4; i++) {
              arr.push(i)
            }
          }
        } else {
          for (let i = 1; i <= this.allpage; i++) {
            arr.push(i)
          }
        }
        return arr
      }
    },
    data: function () {
      return {
        skipvalue: ''
      }
    },
    props: ['currentpage', 'allpage'],
    methods: {
      clickCurrent: function (item) {
        this.$emit('changePage', item)
      },
      // 点击上一页
      clickPrev: function () {
        if (this.currentpage - 1 < 1) {
          return false
        }
        this.$emit('changePage', this.currentpage - 1)
      },
      // 点击下一页
      clickNext: function () {
        if (this.currentpage + 1 > this.allpage) {
          return false
        }
        this.$emit('changePage', this.currentpage + 1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/var";
  @import "~@/styles/mixin";

  .y-pagination {
    height: 34px;
    line-height: 34px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .pagination-btn {
      background: #FFFFFF;
      border: 1px solid #E9E9E9;
      width: 34px;
      height: 34px;
      .page-icon {
        width: 100%;
        height: 100%;
        font-size: 34px;
        color: #0A96F0;
      }
    }
    .pagination-btn.disable {
      cursor: not-allowed;
      span {
        color: #979797;
      }
    }
    .pagination-page {
      display: inline-block;
      height: 34px;
      line-height: 34px;
      span {
        display: inline-block;
        width: 34px;
        line-height: 34px;
        background: #FFFFFF;
        border-radius: 17px;
        font-family: MicrosoftYaHei;
        font-size: 18px;
        color: #000000;
        letter-spacing: 0;
        &:hover {
          background: #0A96F0;
          color: #FFFFFF;
        }
        margin-left: 16.5px;
      }
      :last-child {
        margin-right: 16.5px;
      }
      .active {
        background: #0A96F0;
        color: #FFFFFF;
      }
    }
  }
</style>
