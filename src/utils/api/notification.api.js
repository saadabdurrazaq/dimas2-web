import httpClient from "./httpClient"

export const get = (distributor_id = "") => httpClient.get('/notification' + `/${distributor_id}` )

export default {
    get,
}