import httpClient from "./httpClient"

export const approveSelected = (bundle_ids, registration_period_id) => httpClient.post('/distributor-approvals/approve-batch', {
    bundle_ids,
    registration_period_id
})
export const rejectSelected = (bundle_ids, registration_period_id) => httpClient.post('/distributor-approvals/reject-batch', {
    bundle_ids,
    registration_period_id
})

export default {
    approveSelected,
    rejectSelected
}
