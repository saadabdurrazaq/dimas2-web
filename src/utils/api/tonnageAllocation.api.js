import httpClient from "./httpClient"

export const setAllocation = (data) => httpClient.post('/tonnage-allocations', data)
export const getAllocation = (params) => httpClient.get(`/get-allocation/tonnage${params}`);

export default {
    setAllocation,
    getAllocation
}