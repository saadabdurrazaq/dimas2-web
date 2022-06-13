import httpClient from "./httpClient"

const END_POINT = '/document-nib'

export const get = (id = "") => httpClient.get(END_POINT)
export const add = (data) => httpClient.post(END_POINT, data)
export const update = (id = "", data) => httpClient.put(END_POINT + `/${id}`, data)
export const activate = (id = "", data) => httpClient.put(END_POINT + `/${id}/activate`, data)
export const deactivate = (id = "", data) => httpClient.put(END_POINT + `/${id}/deactivate`, data)

export default {
    get,
    add,
    update,
    activate,
    deactivate
}