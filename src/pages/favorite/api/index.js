import api from 'common/api/service'

export const getFavoriteColumns = async function (data = {}, userId) {
  const url = `/user/${userId}/favorite`

  const params = { ...data }
  const response = await api.get(url, params)
  return response
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
