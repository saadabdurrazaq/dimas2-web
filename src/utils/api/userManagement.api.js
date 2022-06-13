import httpClient from "./httpClient"

export const adminManagement = {
    add: (data) => httpClient.post(`/admins/create`, data),
    show: (id) => httpClient.get(`/admins/${id}`),
    update: (id, data) => {
        return httpClient.put(`/admins/${id}`, {
            ...data
        })
    },
    changePassword: (id, data) => {
        return httpClient.put(`/admins/${id}/change-password`, {
            ...data
        })
    },
    deactivate: (id) => {
        return httpClient.get(`/admins/${id}/deactivate`)
    },
    activate: (id) => {
        return httpClient.get(`/admins/${id}/activate`)
    },
    assignRegions: (id, region_ids) => {
        return httpClient.post(`/admins/${id}/assign-region`, {
            region_ids
        })
    },
    getAdminRoles: (id) => httpClient.get(`/admins/${id}/roles`),
    assignAdminRoles: (id, role_ids) => httpClient.put(`/admins/${id}/assign-roles`, {
        role_ids
    })
}

export const roleManagement = {
    index: () => httpClient.get('/roles')
}

export const userManagement = {
    show: (id) => httpClient.get(`/users/${id}`),
    update: (id, data) => {
        return httpClient.put(`/users/${id}`, {
            ...data
        })
    },
    changePassword: (id, data) => {
        return httpClient.put(`/users/${id}/change-password`, {
            ...data
        })
    },
}

export default {
    adminManagement,
    roleManagement,
    userManagement
}