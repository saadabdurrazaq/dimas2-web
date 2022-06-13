import httpClient from "./httpClient"

const END_POINT = '/distributors'

export const show = (id) => httpClient.get(`${END_POINT}/${id}/regions`)
export const getProposedRegions = (distributorId) => httpClient.get(`${END_POINT}/${distributorId}/proposed-regions`)
export const getProposedProvinces = (distributorId, regionCode) => httpClient.get(`${END_POINT}/${distributorId}/proposed-regions/${regionCode}/provinces`)
export const getProposedCities = (distributorId, regionCode, provinceId) => httpClient.get(`${END_POINT}/${distributorId}/proposed-regions/${regionCode}/provinces/${provinceId}/cities`)

export default {
    show,
    getProposedRegions,
    getProposedProvinces,
    getProposedCities
}