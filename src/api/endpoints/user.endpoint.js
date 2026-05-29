import apiService from '@/api/services/api.service'

const USERS_BASE = '/users'

export const userEndpoints = {
  getAll: (params) =>
    apiService.get(USERS_BASE, params),

  getById: (id) =>
    apiService.get(`${USERS_BASE}/${id}`),

  update: (id, data) =>
    apiService.put(`${USERS_BASE}/${id}`, data),

  delete: (id) =>
    apiService.delete(`${USERS_BASE}/${id}`),
}
