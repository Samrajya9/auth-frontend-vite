import apiService from "../services/api.service";
import type { AuthResponse, LoginDto, RegisterDto, User } from "./auth.types";

const AUTH_BASE = "/auth";

export const authEndpoints = {
  register: (data: RegisterDto) =>
    apiService.post<AuthResponse, RegisterDto>(
      `${AUTH_BASE}/register`,
      data
    ),

  login: (data: LoginDto) =>
    apiService.post<AuthResponse, LoginDto>(
      `${AUTH_BASE}/login`,
      data 
    ),

  logout: () =>
    apiService.post<void>(`${AUTH_BASE}/logout`),

  getMe: () =>
    apiService.get<User>(`${AUTH_BASE}/me`,{

    }),
};