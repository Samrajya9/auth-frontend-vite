import { lazy } from 'react'
import AdminLayout from '@/components/layout/AdminLayout'

const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'))
const AdminUsers     = lazy(() => import('@/pages/admin/AdminUsers'))

// ✅ To add a new admin route: push to children
export const adminRoutes = {
  path: '/admin',
  element: <AdminLayout />,
  children: [
    { index: true, element: <AdminDashboard /> },
    { path: 'users', element: <AdminUsers /> },
    // { path: 'settings', element: <AdminSettings /> },  ← add here
  ],
}
