import httpClient from "./httpClient"

const END_POINT = '/producer'

export const all = () => httpClient.get(`${END_POINT}`)

export default {
    all,
}
