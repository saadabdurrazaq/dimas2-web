import httpClient from "./httpClient"

export const updateApprovalStatus = (
    distributorIds,
    registration_period_id,
    producer_code,
    region_code,
    province_id,
    city_id
) => httpClient.put('/distributor-recommendation-final-approvals/approval-status', {
    distributorIds
}, {
    params: {
        registration_period_id,
        producer_code,
        region_code,
        province_id,
        city_id
    }
})

export const setFinalized = (periodId) => httpClient.get('/finalized-distributor?registration_period_id=' + periodId)
export const sendMailSpjb = (periodId) => httpClient.get('/send-email-spjb?registration_period_id=' + periodId)

export default {
    updateApprovalStatus,
    setFinalized,
    sendMailSpjb,
}