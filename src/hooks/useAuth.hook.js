import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { authEndpoints } from '@/api/endpoints/auth.endpoint'
import { QUERY_KEYS } from '@/utils/queryKeys.util'

// ── useRegister ───────────────────────────────────────────────────────────────
export const useRegister = () => {
  return useMutation({
    mutationFn: (data) => authEndpoints.register(data),
    onSuccess: (response) => {
      if (response?.token) {
        localStorage.setItem('auth_token', response.token)
      }
    },
  })
}

// ── useLogin ──────────────────────────────────────────────────────────────────
export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data) => authEndpoints.login(data),
    onSuccess: (response) => {
      if (response?.token) {
        localStorage.setItem('auth_token', response.token)
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.AUTH_ME] })
      }
    },
  })
}

// ── useLogout ─────────────────────────────────────────────────────────────────
export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => authEndpoints.logout(),
    onSettled: () => {
      localStorage.removeItem('auth_token')
      queryClient.clear()
    },
  })
}

// ── useMe ─────────────────────────────────────────────────────────────────────
export const useMe = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.AUTH_ME],
    queryFn: () => authEndpoints.getMe(),
    enabled: !!localStorage.getItem('auth_token'),
    retry: false,
  })
}
