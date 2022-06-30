import httpClient from "./httpClient"

const END_POINT = '/'

export const getXSRFToken = () => httpClient.get('sanctum/csrf-cookie')
export const getUser = () => httpClient.get('user')

export const login = (credential) => httpClient.post('login', credential) 
export const register = (data) => httpClient.post('register', data)

export const forgotPassword = (email) => httpClient.post('forgot-password', email)
export const resetPassword = (data) => httpClient.post('reset-password', data)

export const logout = () => httpClient.post('logout') 

export default {
    login,
    logout,
    getXSRFToken,
    getUser,
    register,
    forgotPassword,
    resetPassword,
}