import httpClient from "./httpClient"

const END_POINT = '/distributor-candidate'

export const checkCustomerAccount = (customerID, npwp) => httpClient.post(END_POINT + `/check-customer-account`, {
  customerID,
  npwp
})
export const store = (formData) => httpClient.post(END_POINT, formData)

export default {
    checkCustomerAccount,
    store,
}
