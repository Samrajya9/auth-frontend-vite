import { lazy } from 'react'
import MainLayout from '@/components/layout/MainLayout'

// Lazy load pages for code-splitting
const HomePage    = lazy(() => import('@/pages/main/HomePage'))
const AboutPage   = lazy(() => import('@/pages/main/AboutPage'))

// ✅ To add a new main route: just push an object into this array
export const mainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { index: true, element: <HomePage /> },
    { path: 'about',  element: <AboutPage /> },
    // { path: 'contact', element: <ContactPage /> },  ← add here
  ],
}
