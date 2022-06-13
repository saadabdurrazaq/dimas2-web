import httpClient from "./httpClient"

export const area = () => httpClient.get('/area')
export const producer = () => httpClient.get('/producer')

export default {
    area,
    producer
}