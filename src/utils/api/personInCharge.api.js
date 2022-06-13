import httpClient from "./httpClient"

const END_POINT = '/'

export const get = (id = "") => httpClient.get(END_POINT + `person-in-charge`)
export const add = (data) => httpClient.post(END_POINT + `person-in-charge`, data)
export const update = (id = "", data) => httpClient.put(END_POINT + `person-in-charge/${id}`, data)
export const activate = (id = "", data) => httpClient.put(END_POINT + `person-in-charge/${id}/activate`, data)
export const deactivate = (id = "", data) => httpClient.put(END_POINT + `person-in-charge/${id}/deactivate`, data)

export default {
    get,
    add,
    update,
    activate,
    deactivate
}