import httpClient from "./httpClient"

export const index = () => httpClient.get("/regions")
export const getAdminRegions = (user_id) => httpClient.get(`/admin/${user_id}/regions`)
export const assignAdminRegions = (user_id, region_codes) => httpClient.put(`/admin/${user_id}/regions`, {
    region_codes
})

export default {
    index,
    getAdminRegions,
    assignAdminRegions
}