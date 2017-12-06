import api from 'common/api/service'

export const getFavoriteHistorys = async function (data = {}, userId) {
  const url = `/user/${userId}/history`

  const params = { ...data }
  const response = await api.get(url, params)
  return response
}

export const deleteFavoriteHistory = async function (data = {}, columnId, userId) {
  const url = `/user/${userId}/history/${columnId}`
  const params = { ...data }

  return await api.delete(url, params)
}

export const getFavoriteHistory = async function (data = {}, userId) {
  const url = `/user/${userId}/history`
  const params = { ...data }

  return await api.get(url, params)
}
