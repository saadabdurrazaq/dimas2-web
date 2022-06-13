import httpClient from "./httpClient"

const END_POINT = '/legal-information/'

// Akta Perusahaan
export const get_akta = (id = "") => httpClient.get(END_POINT + `akta-perusahaan`)
export const add_akta = (data) => httpClient.post(END_POINT + `akta-perusahaan`, data)
export const update_akta = (id = "", data) => httpClient.put(END_POINT + `akta-perusahaan/${id}`, data)
export const activate_akta = (id = "", data) => httpClient.put(END_POINT + `akta-perusahaan/${id}/activate`, data)
export const deactivate_akta = (id = "", data) => httpClient.put(END_POINT + `akta-perusahaan/${id}/deactivate`, data)

export const get_npwp = (id = "") => httpClient.get(END_POINT + `npwp-perusahaan`)
export const add_npwp = (data) => httpClient.post(END_POINT + `npwp-perusahaan`, data)
export const update_npwp = (id = "", data) => httpClient.put(END_POINT + `npwp-perusahaan/${id}`, data)
export const activate_npwp = (id = "", data) => httpClient.put(END_POINT + `npwp-perusahaan/${id}/activate`, data)
export const deactivate_npwp = (id = "", data) => httpClient.put(END_POINT + `npwp-perusahaan/${id}/deactivate`, data)

export const get_pakta = (id = "") => httpClient.get(END_POINT + `pakta-integritas`)
export const add_pakta = (data) => httpClient.post(END_POINT + `pakta-integritas`, data)
export const update_pakta = (id = "", data) => httpClient.put(END_POINT + `pakta-integritas/${id}`, data)
export const activate_pakta = (id = "", data) => httpClient.put(END_POINT + `pakta-integritas/${id}/activate`, data)
export const deactivate_pakta = (id = "", data) => httpClient.put(END_POINT + `pakta-integritas/${id}/deactivate`, data)

export default {
    get_akta, add_akta, update_akta, activate_akta, deactivate_akta,
    get_npwp, add_npwp, update_npwp, activate_npwp, deactivate_npwp,
    get_pakta, add_pakta, update_pakta, activate_pakta, deactivate_pakta
}