<template>
  <div class="m-form">
    <div v-if="!showState">
      <h3 v-if="title">{{title}}</h3>
      <form action="#" method="post">
        <div>
          <input placeholder="公司名称" type="text" name="cName" id="form-cName" v-model="formData.company.value" tabindex="1" autocomplete="" />
          <div class="warn-tip" v-show="!formData.company.isValid"><span>{{formData.company.warnText}}</span></div>
        </div>
        <div>
          <input placeholder="工作邮箱" type="text" name="email" id="form-email" v-model="formData.email.value" tabindex="2" autocomplete="" />
          <div class="warn-tip" v-show="!formData.email.isValid"><span>{{formData.email.warnText}}</span></div>
        </div>
        <div>
          <input placeholder="姓名" type="text" name="name" id="form-name" v-model="formData.name.value" tabindex="3" autocomplete="" />
          <div class="warn-tip" v-show="!formData.name.isValid"><span>{{formData.name.warnText}}</span></div>
        </div>
        <div>
          <input placeholder="联系电话" type="text" name="phone" id="form-phone" v-model="formData.phone.value" tabindex="4" autocomplete="" />
          <div class="warn-tip" v-show="!formData.phone.isValid"><span>{{formData.phone.warnText}}</span></div>
        </div>
        <div class="sub-btn">
          <button class="u-btn__form" @click.prevent="postData" :class="{disabled: submitDisabled}">{{btnText || '开始体验'}}</button>
        </div>
      </form>
    </div>
    <div v-else class="m-form__box">
      <slot name="success">
        <p>感谢您对我们的信任<br>我们将尽快与您联系</p>
        <div class="sub-btn">
          <button class="u-btn__form" @click="close">好的</button>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
  import { contactForm } from '@/libs/api'
  import { mapMutations } from 'vuex'

  export default {
    name: 'YForm',
    props: ['title', 'btnText'],
    data () {
      return {
        showState: false, // 显示提交状态
        formData: {
          company: { value: '', isValid: true, warnText: '请填写正确的公司名称', name: 'company', reg: /^\s+$/ },
          name: { value: '', isValid: true, warnText: '请填写正确的名称', name: 'name', reg: /^\s+$/ },
          email: { value: '', isValid: true, warnText: '请填写正确的emial', name: 'email', reg: /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i },
          phone: { value: '', isValid: true, warnText: '请填写正确的联系电话', name: 'tel', reg: /^1[3|4|5|7|8][0-9]{9}$/gi }
        },
        formString: ''
      }
    },
    computed: {
      submitDisabled () {
        let hasEmpty = false
        Object.keys(this.formData).forEach((key) => {
          const item = this.formData[key]
          if (!item.value || !item.value.trim()) hasEmpty = true
        })
        return hasEmpty
      }
    },
    mounted () {
      this.formString = JSON.stringify(this.formData)
    },
    methods: {
      close () {
        this.$emit('close')
        this.showState = false
      },
      validForm () {
        let valid = true
        try {
          Object.keys(this.formData).forEach((key) => {
            const item = this.formData[key]

            if (['company', 'name'].indexOf(item.name) > -1) {
              if (item.value === '') {
                valid = false
                item.isValid = false
                setTimeout(() => {
                  item.isValid = true
                }, 2000)
              }
            } else {
              if (item.reg && item.reg.test && !item.reg.test(item.value)) {
                valid = false
                item.isValid = false
                setTimeout(() => {
                  item.isValid = true
                }, 2000)
              }
            }
          })
        } catch (err) {
          console.log(err)
        }
        return valid
      },
      async postData () {
        if (!this.validForm()) return
        const data = {}
        Object.keys(this.formData).forEach((key) => {
          const item = this.formData[key]
          data[item.name] = item.value
        })
        try {
          const result = await contactForm(data)
          if (result) {
            this.showState = true
            this.setHasTrial(true) // 设置是否已经提交申请的标识
            this.formData = JSON.parse(this.formString)
          }
        } catch (err) {
          console.log(err)
        }
      },
      ...mapMutations({
        setHasTrial: 'BODY_HAS_TRIAL'
      })
    }
  }
</script>
<style lang="scss">
@import "~@/styles/var";
@import "~@/styles/mixin";

.m-form {
  text-align: left;
  &__box {
    text-align: center;
    padding: 20px;
    margin-bottom: 0;
    p {
      color: $color-black;
      font-size: 28px;
      line-height: 1.5;
    }
    button {
      margin-top: 10px;
    }
  }
  h3 {
    text-align: left;
    margin-bottom: 30px;
    color: #000;
  }
  .warn-tip {
    position: absolute;
    width: 100%;
    text-align: center;
    left: 0;
    font-size: 12px;
    color: #666;
    top: -25px;
    span {
      display: inline-block;
      background-color: #F8F8F8;
      line-height: 1.6;
      border-radius: 2px;
      padding: 0 .6em;
      border: 1px solid $color-light-grey;
      &:after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        border-radius: 2px;
        background-color: inherit;
        bottom: 0;
        left: 50%;
        bottom: -4px;
        transform: rotate(-135deg);
        border-left: 1px solid $color-light-grey;
        border-top: 1px solid $color-light-grey;
      }
    }
  }
  label {
    cursor: pointer;
    display: inline-block;
    color: $color-darker-grey;
    font-size: 14px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    padding: 0 20px;
    border: 1px solid $color-light-grey;
    outline: none;
    height: 50px;
    border-radius: 4px;
    -webkit-appearance: none;
    margin-bottom: 20px;
    &:focus {
      border-color: $color-light-blue;
    }
  }
  form {
    >div {
      position: relative;
    }
  }
  .sub-btn {
    text-align: center;
    margin-top: 10px;
    button {
      border-width: 1px;
      height: 58px;
      line-height: 58px;
      &.disabled {
        background-color: #fff;
        color: #999;
        border-color: $color-light-grey;
      }
    }
  }
}
#mobile {
  .m-form {
    >div {
      margin-bottom: .666667rem;
    }
    label {
      margin-bottom: .4rem;
    }
    .sub-btn {
      margin-top: 1.333333rem;
      button {
        // background-color: transparent;
        // color: $color-primary;
        &.disabled {
          background-color: #fff;
          color: #999;
          border-color: $color-light-grey;
        }
      }
    }
  }
}
</style>
