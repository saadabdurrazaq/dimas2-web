import httpClient from "./httpClient"

const END_POINT = '/taxes/'

// Akta Perusahaan
export const get_spkp = (id = "") => httpClient.get(END_POINT + `spkp`)
export const add_spkp = (data) => httpClient.post(END_POINT + `spkp`, data)
export const update_spkp = (id = "", data) => httpClient.put(END_POINT + `spkp/${id}`, data)
export const activate_spkp = (id = "", data) => httpClient.put(END_POINT + `spkp/${id}/activate`, data)
export const deactivate_spkp = (id = "", data) => httpClient.put(END_POINT + `spkp/${id}/deactivate`, data)

export const get_skf = (id = "") => httpClient.get(END_POINT + `skf`)
export const add_skf = (data) => httpClient.post(END_POINT + `skf`, data)
export const update_skf = (id = "", data) => httpClient.put(END_POINT + `skf/${id}`, data)
export const activate_skf = (id = "", data) => httpClient.put(END_POINT + `skf/${id}/activate`, data)
export const deactivate_skf = (id = "", data) => httpClient.put(END_POINT + `skf/${id}/deactivate`, data)

export const get_spt = (id = "") => httpClient.get(END_POINT + `spt`)
export const add_spt = (data) => httpClient.post(END_POINT + `spt`, data)
export const update_spt = (id = "", data) => httpClient.put(END_POINT + `spt/${id}`, data)
export const activate_spt = (id = "", data) => httpClient.put(END_POINT + `spt/${id}/activate`, data)
export const deactivate_spt = (id = "", data) => httpClient.put(END_POINT + `spt/${id}/deactivate`, data)

export default {
    get_spkp, add_spkp, update_spkp, activate_spkp, deactivate_spkp,
    get_skf, add_skf, update_skf, activate_skf, deactivate_skf,
    get_spt, add_spt, update_spt, activate_spt, deactivate_spt,
}