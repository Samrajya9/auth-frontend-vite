import apiService from "../../api/services/api.service";

const USERS_BASE = "/users";

// You should replace these with real types later
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
}

// Query params (optional — adjust as needed)
export type GetUsersParams = {
  page?: number;
  limit?: number;
  search?: string;
};

export const userEndpoints = {
  getAll: (params?: GetUsersParams) =>
    apiService.get<User[]>(USERS_BASE, params),

  getById: (id: string) =>
    apiService.get<User>(`${USERS_BASE}/${id}`),

  update: (id: string, data: UpdateUserDto) =>
    apiService.put<User, UpdateUserDto>(`${USERS_BASE}/${id}`, data),

  delete: (id: string) =>
    apiService.delete<{ success: boolean }>(`${USERS_BASE}/${id}`),
};