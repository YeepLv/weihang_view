import http from './http'

/**
 * 获取机器人回答
 * @param {String} query 用户问句
 */
export async function getAnswer (query) {
  const rsp = await http.get('/robot', {
    params: {
      question: query
    }
  })
  return rsp.data.data
}

/**
 * 获取推荐问句
 * @param {String} type 分类
 */
export async function getReco (type) {
  const rsp = await http.get('/robot_recommend_question', {
    params: {
      type
    }
  })
  return rsp.data.data
}

/**
 * 上传联系人表单
 * @param {String} data 表单数据
 */
export async function contactForm (data) {
  const rsp = await http.post('/contact', data)
  return rsp.data.data
}
