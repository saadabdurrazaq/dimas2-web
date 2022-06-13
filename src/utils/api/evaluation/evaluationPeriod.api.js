import httpClient from '../httpClient'

const END_POINT = '/evaluation-periods'
export const getActive = () => httpClient.get(`${END_POINT}/get-active`)
export const getActiveMonth = () =>
  httpClient.get(`${END_POINT}/get-active-month`)
export const getAll = () => httpClient.get(END_POINT)
export const show = (id) => httpClient.get(`${END_POINT}/${id}`)
export const getAllPeriod = () => httpClient.get(`${END_POINT}/get-all-period`)

export const add = (data) => httpClient.post(END_POINT, data)
export const update = (id = '', data) =>
  httpClient.put(END_POINT + `/${id}`, data)
export const activate = (id = '', data) =>
  httpClient.put(END_POINT + `/${id}/activate`, data)
export const deactivate = (id = '', data) =>
  httpClient.put(END_POINT + `/${id}/deactivate`, data)

export const getAspectItemsAvailableForUser = () =>
  httpClient.get('/evaluation-aspects/available-for-distributor')

export const getRecommendStatusSkor = () =>
  httpClient.get('/distributor-evaluation/list/evaluation-recommend-status')

export default {
  getActive,
  getActiveMonth,
  getAll,
  show,
  add,
  update,
  activate,
  deactivate,
  getAspectItemsAvailableForUser,
  getRecommendStatusSkor,
  getAllPeriod,
}
