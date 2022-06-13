import httpClient from "./httpClient"

const END_POINT = '/distributors'

export const getCurrentPeriodRegistrationInfo = (id) => httpClient.get(`${END_POINT}/${id}/current-period-registration-info`)
export const getAllDistributorsByRegion = () => httpClient.get(`${END_POINT}/get-all-distributors`);

export default {
    getCurrentPeriodRegistrationInfo,
    getAllDistributorsByRegion,
}
