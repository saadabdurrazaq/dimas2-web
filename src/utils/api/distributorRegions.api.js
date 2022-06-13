import httpClient from "./httpClient"

const END_POINT = '/distributor-regions'

export const regions = (id = "") => httpClient.get(END_POINT + `/regions`)
export const regions_by_vp = (id = "") => httpClient.get(END_POINT + `/regions_by_vp`)
export const regions_by_wilayah = (id = "") => httpClient.get(END_POINT + `/regions_by_wilayah`)
export const regions_by_anper = (code = "") => httpClient.get(END_POINT + `/regions_by_anper/${code}`);
export const regionProvinces = (id = "") => httpClient.get(END_POINT + `/regions-province/${id}`)
export const regionProvincesAnper = (id = "", code ="") => httpClient.get(END_POINT + `/regions-province-anper/${id}/${code}`);
export const regionProducerArea = (id = "") => httpClient.get(END_POINT + `/producer-area/${id}`)
export const regionProducerAreaAnper = (id = "", code = "") => httpClient.get(END_POINT + `/producer-area-anper/${id}/${code}`);

export const addDistributorRegions = (data) => httpClient.post(END_POINT, data);
export const updateDistributorRegions = (id = "", data) => httpClient.put(END_POINT + `/${id}`, data);
export const deleteDistributorRegion = (id) => httpClient.delete(END_POINT + `/${id}`);

export const verifyDistributorRegion = (id) => httpClient.post(END_POINT + `/${id}/verify`);

export default {
    regions,
    regions_by_vp,
    regions_by_wilayah,
    regions_by_anper,
    regionProvinces,
    regionProvincesAnper,
    regionProducerArea,
    regionProducerAreaAnper,

    addDistributorRegions,
    updateDistributorRegions,
    deleteDistributorRegion,
    verifyDistributorRegion
}
