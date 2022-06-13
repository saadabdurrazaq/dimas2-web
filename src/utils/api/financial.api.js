import httpClient from "./httpClient"

const END_POINT = '/financial/'

export const get_balance_report = (id = "") => httpClient.get(END_POINT + `balance-report`)
export const add_balance_report = (data) => httpClient.post(END_POINT + `balance-report`, data)
export const update_balance_report = (id = "", data) => httpClient.put(END_POINT + `balance-report/${id}`, data)
export const activate_balance_report = (id = "", data) => httpClient.put(END_POINT + `balance-report/${id}/activate`, data)
export const deactivate_balance_report = (id = "", data) => httpClient.put(END_POINT + `balance-report/${id}/deactivate`, data)

export const get_income_report = (id = "") => httpClient.get(END_POINT + `income-report`)
export const add_income_report = (data) => httpClient.post(END_POINT + `income-report`, data)
export const update_income_report = (id = "", data) => httpClient.put(END_POINT + `income-report/${id}`, data)
export const activate_income_report = (id = "", data) => httpClient.put(END_POINT + `income-report/${id}/activate`, data)
export const deactivate_income_report = (id = "", data) => httpClient.put(END_POINT + `income-report/${id}/deactivate`, data)

export const get_other_report = (id = "") => httpClient.get(END_POINT + `other-finance-report`)
export const add_other_report = (data) => httpClient.post(END_POINT + `other-finance-report`, data)
export const update_other_report = (id = "", data) => httpClient.put(END_POINT + `other-finance-report/${id}`, data)
export const activate_other_report = (id = "", data) => httpClient.put(END_POINT + `other-finance-report/${id}/activate`, data)
export const deactivate_other_report = (id = "", data) => httpClient.put(END_POINT + `other-finance-report/${id}/deactivate`, data)


export const get_yearly_financial_summary = (id = "") => httpClient.get(END_POINT + `financial-summary`)
export const add_yearly_financial_summary = (data) => httpClient.post(END_POINT + `financial-summary`, data)
export const update_yearly_financial_summary = (id = "", data) => httpClient.put(END_POINT + `financial-summary/${id}`, data)
export const activate_yearly_financial_summary = (id = "", data) => httpClient.put(END_POINT + `financial-summary/${id}/activate`, data)
export const deactivate_yearly_financial_summary = (id = "", data) => httpClient.put(END_POINT + `financial-summary/${id}/deactivate`, data)

export const get_current_account_report = (id = "") => httpClient.get(END_POINT + `current-account-report`)
export const add_current_account_report = (data) => httpClient.post(END_POINT + `current-account-report`, data)
export const update_current_account_report = (id = "", data) => httpClient.put(END_POINT + `current-account-report/${id}`, data)
export const activate_current_account_report = (id = "", data) => httpClient.put(END_POINT + `current-account-report/${id}/activate`, data)
export const deactivate_current_account_report = (id = "", data) => httpClient.put(END_POINT + `current-account-report/${id}/deactivate`, data)

export const get_distributor_financing = (id = "") => httpClient.get(END_POINT + `distributor-financing`)
export const add_distributor_financing = (data) => httpClient.post(END_POINT + `distributor-financing`, data)
export const update_distributor_financing = (id = "", data) => httpClient.put(END_POINT + `distributor-financing/${id}`, data)
export const activate_distributor_financing = (id = "", data) => httpClient.put(END_POINT + `distributor-financing/${id}/activate`, data)
export const deactivate_distributor_financing = (id = "", data) => httpClient.put(END_POINT + `distributor-financing/${id}/deactivate`, data)

export default {
    get_balance_report, add_balance_report, update_balance_report, activate_balance_report, deactivate_balance_report,
    get_income_report, add_income_report, update_income_report, activate_income_report, deactivate_income_report,
    get_other_report, add_other_report, update_other_report, activate_other_report, deactivate_other_report,

    get_yearly_financial_summary, add_yearly_financial_summary, update_yearly_financial_summary, activate_yearly_financial_summary, deactivate_yearly_financial_summary,
    get_current_account_report, add_current_account_report, update_current_account_report, activate_current_account_report, deactivate_current_account_report,
    get_distributor_financing, add_distributor_financing, update_distributor_financing, activate_distributor_financing, deactivate_distributor_financing,
}