import axiosInstance from '@/lib/axios.lib'

// Reusable base API service — wraps every HTTP verb
// All endpoint functions call these helpers so error handling is centralised

const apiService = {
  async get(url, params = {}) {
    const response = await axiosInstance.get(url, { params })
    return response.data
  },

  async post(url, data = {}) {
    const response = await axiosInstance.post(url, data)
    return response.data
  },

  async put(url, data = {}) {
    const response = await axiosInstance.put(url, data)
    return response.data
  },

  async patch(url, data = {}) {
    const response = await axiosInstance.patch(url, data)
    return response.data
  },

  async delete(url) {
    const response = await axiosInstance.delete(url)
    return response.data
  },
}

export default apiService
