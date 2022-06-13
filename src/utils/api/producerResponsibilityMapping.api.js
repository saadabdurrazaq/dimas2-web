import httpClient from "./httpClient"

export const getRegions = () => httpClient.get('/regions')
export const getProducers = () => httpClient.get('/producer')

export default {
    getRegions,
    getProducers
}