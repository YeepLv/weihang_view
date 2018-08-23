import axios from 'axios'
// import ElementUI from 'element-ui'

/**
 * 统一处理接口返回的字段
 * @param {Object} response 服务器的返回值
 * @returns {Boolean} true：通过处理，执行回调，false：没通过处理，执行特定步骤，不执行回调
 */
function verify (response) {
  if (response.code >= 200 && response.code <= 299) {
    return true
  }
  /* 暂时不需要处理状态码
  switch (response.code) {
    case 100:
      location.href = '/'
      break
    case 101:
      ElementUI.Message('当前无权限访问该页面')
      break
    case 300:
      location.href = response.data
      break
    case 301:
      ElementUI.MessageBox.alert(response.message, '系统提示', {
        confirmButtonText: '确定',
        callback (action) {
          if (action === 'confirm') {
            location.href = response.data
          }
        }
      })
      break
    case 400:
      ElementUI.Message.error(response.message)
      break
    case 500:
      ElementUI.Message.error('服务器异常')
      break
    case 501:
      ElementUI.Message.error('服务器停机维护')
      break
    default:
      ElementUI.Message.error('当前服务器返回了一个未定义的状态码')
      break
  }
  */
  return false
}

const http = axios.create()

// 响应数据拦截器
http.interceptors.response.use(response => {
  if (verify(response.data)) {
    return response
  }
}, error => {
  // ElementUI.Message.error('接口请求异常')
  return Promise.reject(error)
})

export default http
