import httpClient from "./httpClient"

const END_POINT = '/'

export const get = (id = "") => httpClient.get(END_POINT + `transportation`)
export const add = (data) => httpClient.post(END_POINT + `transportation`, data)
export const update = (id = "", data) => httpClient.put(END_POINT + `transportation/${id}`, data)
export const activate = (id = "", data) => httpClient.put(END_POINT + `transportation/${id}/activate`, data)
export const deactivate = (id = "", data) => httpClient.put(END_POINT + `transportation/${id}/deactivate`, data)

export const check_duplicate = (id="", data) => httpClient.post(END_POINT + `transportation/${id}/check-duplicate`, data)

export default {
    get,
    add,
    update,
    activate,
    deactivate,
    check_duplicate
}