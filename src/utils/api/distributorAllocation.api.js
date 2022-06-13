import httpClient from "./httpClient"

export const setAllocation = (data) => httpClient.post('/distributor-allocations', data)
export const getAllocation = (params) => httpClient.get(`/get-allocation/distributor${params}`);

export const isAllocationFull = (data, type = '') => httpClient.post(`/distributor-allocations/${type}/is-allocation-full`, data)

export default {
    setAllocation,
    getAllocation,
    isAllocationFull
}