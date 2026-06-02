import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils/queryKeys.util";
import { authEndpoints } from "../api/auth/auth.endpoint";

import type {
  AuthResponse,
  LoginDto,
  RegisterDto,
  User,
} from "../api/auth/auth.types";
import apiService from "@/api/services/api.service";
import axiosInstance from "@/lib/axios.lib";

// ── useRegister ─────────────────────────────────────────────
export const useRegister = () => {
  return useMutation<AuthResponse, Error, RegisterDto>({
    mutationFn: authEndpoints.register,

    onSuccess: (response) => {
      localStorage.setItem(
        "auth_token",
        response.accessToken
      );
    },
  });
};

// ── useLogin ────────────────────────────────────────────────
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error, LoginDto>({
    mutationFn: async(data) => {
      const response = await axiosInstance.post<{message:string}>(`https://corridor-daylight-skating.ngrok-free.dev/auth/login`, data, {
        withCredentials: true,
      });
      return response;
    },

    onSuccess: (response) => {
      localStorage.setItem(
        "auth_token",
        response.accessToken
      );

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.AUTH.ME],
      });
    },
  });
};

// ── useLogout ───────────────────────────────────────────────
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error>({
    mutationFn: authEndpoints.logout,

    onSettled: () => {
      localStorage.removeItem("auth_token");
      queryClient.clear();
    },
  });
};

// ── useMe ───────────────────────────────────────────────────
export const useMe = () => {
  return useQuery<User>({
    queryKey: [QUERY_KEYS.AUTH.ME],
    queryFn: authEndpoints.getMe,
    enabled: !!localStorage.getItem("auth_token"),
    retry: false,
  });
};