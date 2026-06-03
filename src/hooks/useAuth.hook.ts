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

    onSuccess: (response) => {},
  });
};

// ── useLogin ────────────────────────────────────────────────
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, LoginDto>({
    mutationFn: async (data) => {
      const response = await apiService.post<{ message: string }>(
        `https://corridor-daylight-skating.ngrok-free.dev/auth/login`,
        data,
      );
      return response;
    },

    onSuccess: () => {
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
      queryClient.clear();
    },
  });
};

// ── useMe ───────────────────────────────────────────────────
export const useMe = () => {
  return useQuery<User>({
    queryKey: [QUERY_KEYS.AUTH.ME],
    queryFn: authEndpoints.getMe,
    retry: false,
  });
};
