import httpClient from "./httpClient"

export const setRecommendation = (data) => httpClient.post('/distributor-recommendations', data)
export const setMultipleRecommendation = (data) => httpClient.post('/distributor-recommendations-multi', data)
export const setRecommendationApproval = (data) => httpClient.post('/distributor-recommendation-approvals', data)

export default {
    setRecommendation,
    setMultipleRecommendation,
    setRecommendationApproval
}