import httpClient from "./httpClient"


export const approveBundle = (bundleId, notes, allocation = null) => httpClient.post(`/bundle/${bundleId}/approve`, {
    notes,
    allocation
})

export const rejectBundle = (bundleId, notes) => httpClient.post(`/bundle/${bundleId}/reject`, {
    notes
})

export const approveDistributorBundle = (distributorId, registration_period) => httpClient.post(`/distributors/${distributorId}/bundle/approve`, {}, {
    params: {
        registration_period
    }
})

export const rejectDistributorBundle = (distributorId, registration_period) => httpClient.post(`/distributors/${distributorId}/bundle/reject`, {}, {
    params: {
        registration_period
    }
})

export const verifyAll = (distributorId, registration_period) => httpClient.post(`/distributors/${distributorId}/bundle-items/verify-all`, {}, {
    params: {
        registration_period
    }
})

export const submitBundleForVerification = () => httpClient.post(`/verification-bundle`)

export default {
    approveBundle,
    rejectBundle,
    approveDistributorBundle,
    rejectDistributorBundle,
    verifyAll,
    submitBundleForVerification
}
