import httpClient from "./../httpClient"

export const setRecommendationSVPPso = (data) => httpClient.post('/distributor-evaluation/approved/svp-pso', data)
export const setRecommendationSEVPMarketing = (data) => httpClient.post('/distributor-evaluation/approved/sevp-marketing', data)

export default {
  setRecommendationSVPPso,
  setRecommendationSEVPMarketing
}
