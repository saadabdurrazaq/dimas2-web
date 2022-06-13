import httpClient from "./httpClient"

const END_POINT = '/teritorial' 

export const province = (id = "") => httpClient.get(END_POINT + `/province/${id}`)
export const city = (id = "") => httpClient.get(END_POINT + `/city/${id}`)
export const district = (id = "") => httpClient.get(END_POINT + `/district/${id}`)
export const village = (id = "") => httpClient.get(END_POINT + `/village/${id}`)

export default {
    province,
    city,
    district,
    village
}