import httpClient from "./httpClient"

const END_POINT = '/financial/bank-key'

export const get = (query = "") => httpClient.get(END_POINT + '/search', {
    params: {
        name: query
    }
})

export const show = (id) => httpClient.get(END_POINT + `/${id}`)

export default {
    get,
    show
}