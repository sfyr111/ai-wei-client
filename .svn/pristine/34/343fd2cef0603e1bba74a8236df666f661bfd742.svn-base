import api from 'common/api/service'

export const test = async function (data = {}) {
  const url = '/test/222'
  const params = { ...data }
  console.log(params)
  const response = await api.post(url, params)
  return response
}

export const wechatLogin = async function (data = {}) {
  const url = '/wechat/login'

  const params = { ...data }
  const response = await api.post(url, params)
  return response
}

export const getPopularColumns = async function (data = {}) {
  const url = '/column/popular'

  const params = { ...data }
  const response = await api.get(url, params)
  return response
}

export const getClassify = async function (data = {}) {
  const url = '/classify'

  const params = { ...data }
  const response = await api.get(url, params)
  return response
}

export const getBanner = async function (data = {}) {
  const url = '/banner'

  const params = { ...data }
  const response = await api.get(url, params)
  return response
}

export const getBannerById = async function (data = {}, userId) {
  const url = `/banner/${userId}`

  const params = { ...data }
  const response = await api.get(url, params)
  return response
}
