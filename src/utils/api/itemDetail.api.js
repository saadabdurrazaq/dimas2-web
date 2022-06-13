import httpClient from "./httpClient"

export const verify = (id = "", recommendationData) => httpClient.post(`bundle-item-details/${id}/verify`, {
  ...recommendationData
})

export default {
    verify
}
