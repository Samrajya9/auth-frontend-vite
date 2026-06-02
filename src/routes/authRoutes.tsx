import { lazy } from 'react'
import AuthLayout from '@/components/layout/AuthLayout'

const LoginPage    = lazy(() => import('@/pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('@/pages/auth/RegisterPage'))

// ✅ To add a new auth route: push to children
export const authRoutes = {
  path: '/',
  element: <AuthLayout />,
  children: [
    { path: 'login',    element: <LoginPage /> },
    { path: 'register', element: <RegisterPage /> },
  ],
}
