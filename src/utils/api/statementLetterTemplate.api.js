import httpClient from "./httpClient"

const END_POINT = '/statement-letter-templates' 

export const get = (id = "") => httpClient.get(END_POINT)
export const add = (data) => httpClient.post(END_POINT, data)
export const show = (id) => httpClient.get(END_POINT + `/${id}`)
export const update = (id = "", data) => httpClient.put(END_POINT + `/${id}`, data)
export const activate = (id = "", data) => httpClient.put(END_POINT + `/${id}/activate`, data)
export const deactivate = (id = "", data) => httpClGient.put(END_POINT + `/${id}/deactivate`, data)

const END_POINT_DISTRIBUTOR = '/statement-letters'
export const get_uploaded_letter = (id = "") => httpClient.get(END_POINT_DISTRIBUTOR);
export const add_letter = (data) => httpClient.post(END_POINT_DISTRIBUTOR, data);
export const update_letter = (id = "", data) => httpClient.put(END_POINT_DISTRIBUTOR + `/${id}`, data)
export const bulkUpdate = (distributorId, data) => httpClient.put(`/distributors/${distributorId}/statement-letters/save`, data)


export default {
    get,
    add,
    show,
    update,
    activate,
    deactivate,

    add_letter,
    get_uploaded_letter,
    update_letter,
    bulkUpdate
}