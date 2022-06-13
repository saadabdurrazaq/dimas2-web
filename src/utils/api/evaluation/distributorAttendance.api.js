import httpClient from "../httpClient"
const END_POINT = '/distributor-activities'

export const get = (id = "") => httpClient.get(END_POINT)
export const add = (data) => httpClient.post(END_POINT, data)
export const update = (id = "", data) => httpClient.put(END_POINT + `/${id}`, data)
export const destroy = (id = "") => httpClient.delete(END_POINT + `/${id}`)

export default {
    get,
    add,
    update,
    destroy,
}