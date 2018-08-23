import moment from 'moment'
import http from '@/libs/http'
import * as types from '@/store/mutation-types'

let state = {
  article: [],
  articleCount: 0,
  news: [],
  newsCount: 0,
  job: [],
  jobCount: 0,
  honors: [],
  honorsCount: 0
}

let getters = {
  article: state => state.article,
  articleCount: state => state.articleCount,
  news: state => state.news,
  newsCount: state => state.newsCount,
  job: state => state.job,
  jobCount: state => state.jobCount,
  honors: state => state.honors,
  honorsCount: state => state.honorsCount
}

let mutations = {
  [types.ABO_ARTICLES] (state, payload) {
    state.article = payload.rows
    state.articleCount = payload.count
  },
  [types.ABO_NEWS] (state, payload) {
    state.news = payload.rows
    state.newsCount = payload.count
  },
  [types.ABO_JOB] (state, payload) {
    state.job = payload.rows
    state.jobCount = payload.count
  },
  [types.ABO_HONORS] (state, payload) {
    state.honors = payload.rows
    state.honorsCount = payload.honorsCount
  }
}

let actions = {

  /**
   * 重置媒体介绍列表
   */
  async editArticleData ({ commit }, payload) {
    commit(types.ABO_ARTICLES, payload)
  },

  /**
   * 获取媒体介绍列表
   */
  async getArticle ({ state, commit }, payload) {
    const { data: res } = await http.get('/articles', { params: payload })
    res.data.rows.forEach(item => {
      item.date = moment(item.date).format('YYYY-MM-DD')

      let ctn = item.content.replace(/<[^>]*>/gi, '')
      item.detail = ctn.length > 74 ? `${ctn.slice(0, 74)}...` : ctn
    })
    const rows = state.article.concat(res.data.rows)
    commit(types.ABO_ARTICLES, {
      rows,
      count: res.data.count
    })
    return res.data
  },

  /**
   * 重置媒体介绍列表
   */
  async editNewsData ({ commit }, payload) {
    commit(types.ABO_NEWS, payload)
  },

  /**
   * 获取媒体介绍列表
   */
  async getNews ({ state, commit }, payload) {
    const { data: res } = await http.get('/articles', { params: payload })
    res.data.rows.forEach(item => {
      item.date = moment(item.date).format('YYYY-MM-DD')

      let ctn = item.content.replace(/<[^>]*>/gi, '')
      item.detail = ctn.length > 74 ? `${ctn.slice(0, 74)}...` : ctn
    })
    const rows = state.news.concat(res.data.rows)
    commit(types.ABO_NEWS, {
      rows,
      count: res.data.count
    })
    return res.data
  },

  /**
   * 获取职位
   */
  async getJob ({ commit }, payload) {
    const { data: res } = await http.get('/jobs', { params: payload })
    commit(types.ABO_JOB, res.data)
  },

  /**
   * 修改荣誉
   */
  async editHonors ({ state, commit }, payload) {
    commit(types.ABO_HONORS, payload)
  },

  /**
   * 获取荣誉
   */
  async getHonors ({ state, commit }, payload) {
    const { data: res } = await http.get('/honors', { params: payload })
    const rows = state.honors.concat(res.data.rows)
    commit(types.ABO_HONORS, {
      rows,
      count: res.data.count
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
