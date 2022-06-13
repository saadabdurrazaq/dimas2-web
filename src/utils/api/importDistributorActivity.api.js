import httpClient from "./httpClient"

export const read_distributor = (data) => httpClient.post('/read-distributor-activity', data);

export default {
    read_distributor,
}