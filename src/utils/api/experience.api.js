import httpClient from "./httpClient"

const END_POINT = '/'

export const get = (id = "") => httpClient.get(END_POINT + `experience`)
export const add = (data) => httpClient.post(END_POINT + `experience`, data)
export const update = (id = "", data) => httpClient.put(END_POINT + `experience/${id}`, data)
export const activate = (id = "", data) => httpClient.put(END_POINT + `experience/${id}/activate`, data)
export const deactivate = (id = "", data) => httpClient.put(END_POINT + `experience/${id}/deactivate`, data)

export default {
    get,
    add,
    update,
    activate,
    deactivate
}