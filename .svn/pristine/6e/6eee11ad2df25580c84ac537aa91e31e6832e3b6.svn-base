import api from 'common/api/service'

export const getColumns = async function (data = {}) {
  const url = '/column'

  const params = { ...data }
  const response = await api.get(url, params)
  return response
}
