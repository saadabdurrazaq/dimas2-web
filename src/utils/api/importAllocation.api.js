import httpClient from "./httpClient"

export const read_distributor = (data) => httpClient.post('/read-allocation/distributor', data);

export const read_tonnage = (data) => httpClient.post('/read-allocation/tonnage', data);

export default {
    read_distributor,
    read_tonnage,
}