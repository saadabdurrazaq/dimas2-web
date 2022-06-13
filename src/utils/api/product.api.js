import httpClient from "./httpClient"

const END_POINT = '/products'

export const all = () => httpClient.get(`${END_POINT}`)
export const add = (data) => httpClient.post(END_POINT, data)
export const show = (id) => httpClient.get(END_POINT + `/${id}`)
export const update = (id = "", data) => httpClient.put(END_POINT + `/${id}`, data)

export default {
    all,
    add,
    show,
    update,
}
