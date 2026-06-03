import axiosInstance from "../../lib/axios.lib";

// Generic API Response helper type
type ApiResponse<T> = Promise<T>;

const apiService = {
  async get<T, P extends Record<string, unknown> = Record<string, unknown>>(
    url: string,
    params: P = {} as P
  ): ApiResponse<T> {
    const response = await axiosInstance.get<T>(url, { params , headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },});
    return response.data;
  },

  async post<T, D = unknown>(
    url: string,
    data: D = {} as D
  ): ApiResponse<T> {
    const response = await axiosInstance.post<T>(url, data);
    return response.data;
  },

  async put<T, D = unknown>(
    url: string,
    data: D = {} as D
  ): ApiResponse<T> {
    const response = await axiosInstance.put<T>(url, data);
    return response.data;
  },

  async patch<T, D = unknown>(
    url: string,
    data: D = {} as D
  ): ApiResponse<T> {
    const response = await axiosInstance.patch<T>(url, data);
    return response.data;
  },

  async delete<T>(url: string): ApiResponse<T> {
    const response = await axiosInstance.delete<T>(url);
    return response.data;
  },
};

export default apiService;