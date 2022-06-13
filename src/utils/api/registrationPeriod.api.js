import httpClient from "./httpClient"

export const create = (formData) => httpClient.post('/registration-periods', {
    ...formData
})
export const update = (id = "", data) => httpClient.put(`registration-periods/${id}`, {data});

export const getActive = () => httpClient.get('/registration-periods/get-active');
export const getAll = () => httpClient.get('/registration-periods');

export const activate = (id = "", data) => httpClient.put(`registration-periods/${id}/activate`);
export const deactivate = (id = "", data) => httpClient.put(`registration-periods/${id}/deactivate`);

export const searchPeriodId = (id = "") => httpClient.get(`registration-periods/get-period/${id}`);

export default {
    create, 
    update,
    getActive,
    getAll, 

    activate,
    deactivate, 

    searchPeriodId,
}