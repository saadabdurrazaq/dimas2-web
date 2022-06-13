import httpClient from "../httpClient"

export const read_tpubers = (data) => httpClient.post('/read-tpubers-data', data);

export default {
    read_tpubers,
}