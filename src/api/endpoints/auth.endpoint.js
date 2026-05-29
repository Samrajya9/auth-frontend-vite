import apiService from '@/api/services/api.service'

// All auth-related API calls live here
// Components never import axiosInstance directly

const AUTH_BASE = '/auth'

export const authEndpoints = {
  register: (data) =>
    apiService.post(`${AUTH_BASE}/register`, data),

  login: (data) =>
    apiService.post(`${AUTH_BASE}/login`, data),

  logout: () =>
    apiService.post(`${AUTH_BASE}/logout`),

  getMe: () =>
    apiService.get(`${AUTH_BASE}/me`),

  refreshToken: (data) =>
    apiService.post(`${AUTH_BASE}/refresh-token`, data),
}
