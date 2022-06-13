import httpClient from "../httpClient"

const END_POINT = '/kiosk-performance-reports'

export const get = (id = "") => httpClient.get(END_POINT)
export const add = (data) => httpClient.post(END_POINT, data)
export const destroy = (id = "") => httpClient.delete(END_POINT + `/${id}`)
export const update = (id = "", data) => httpClient.put(END_POINT + `/${id}`, data)

export const get_kiosk = () => httpClient.get(`get-all-kiosk/`);
export const get_kiosk_distributor = (distributor_id) => httpClient.get('get-all-kiosk/' + distributor_id);

export default {
    get,
    add,
    update,
    destroy,

    get_kiosk, 
    get_kiosk_distributor,
}