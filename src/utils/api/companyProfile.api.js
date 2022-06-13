import httpClient from "./httpClient"

const END_POINT = '/'

export const getDistributorProfile = (id = "") => httpClient.get(END_POINT + `distributor/${id}`)
export const updateDistributorProfile = (id = "", data) => httpClient.put(END_POINT + `distributor/${id}`, data)

export const getCompanyAddress = (id = "") => httpClient.get(END_POINT + `company-address`)
export const addCompanyAddress = (data) => httpClient.post(END_POINT + `company-address`, data)
export const updateCompanyAddress = (id = "", data) => httpClient.put(END_POINT + `company-address/${id}`, data)
export const activateCompanyAddress = (id = "", data) => httpClient.put(END_POINT + `company-address/${id}/activate`, data)
export const deactivateCompanyAddress = (id = "", data) => httpClient.put(END_POINT + `company-address/${id}/deactivate`, data)


export default {
    getDistributorProfile,
    updateDistributorProfile,
    getCompanyAddress,
    updateCompanyAddress,
    addCompanyAddress,
    activateCompanyAddress,
    deactivateCompanyAddress
}