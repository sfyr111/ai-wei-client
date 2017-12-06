import api from 'common/api/service'

export const test = async function (data = {}) {
  const url = '/test/222'
  const params = { ...data }
  console.log(params)
  const response = await api.post(url, params)
  return response
}

export const getCoursesByColumnId = async function (data = {}, columnId) {
  const url = `/video/column/${columnId}`
  const params = { ...data }

  return await api.get(url, params)
}

export const addFavoriteColumn = async function (data = {}, columnId, userId) {
  const url = `/user/${userId}/favorite/${columnId}`
  const params = { ...data }

  return await api.post(url, params)
}

export const deleteFavoriteColumn = async function (data = {}, columnId, userId) {
  const url = `/user/${userId}/favorite/${columnId}`
  const params = { ...data }

  return await api.delete(url, params)
}

export const getFavoriteColumn = async function (data = {}, userId) {
  const url = `/user/${userId}/favorite`
  const params = { ...data }

  return await api.get(url, params)
}

export const getCoursesById = async function (data = {}, columnId) {
  const url = `/column/${columnId}`
  const params = { ...data }

  return await api.get(url, params)
}

export const watchFrequency = async function (data = {}, videoId) {
  const url = `/video/${videoId}`
  const params = { ...data }

  return await api.post(url, params)
}
