import httpClient from '../httpClient'

const END_POINT = '/evaluation-aspect-settings'

export const getAllRaportDistribution = (params) =>
  httpClient.get(`${END_POINT}/raport-distribution?${params}`)
