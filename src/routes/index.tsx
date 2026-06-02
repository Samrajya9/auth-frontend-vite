import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { mainRoutes }  from './mainRoutes'
import { authRoutes }  from './authRoutes'
import { adminRoutes } from './adminRoutes'

// PageLoader shown while lazy-loaded pages are fetching
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin h-10 w-10 border-4 border-primary-500 border-t-transparent rounded-full" />
  </div>
)

// Wrap each route tree in Suspense for lazy loading
const withSuspense = (routeTree) => ({
  ...routeTree,
  element: <Suspense fallback={<PageLoader />}>{routeTree.element}</Suspense>,
  children: routeTree.children?.map((child) => ({
    ...child,
    element: child.element
      ? <Suspense fallback={<PageLoader />}>{child.element}</Suspense>
      : undefined,
  })),
})

// ✅ Register a new route group here — one line per domain
export const router = createBrowserRouter([
  withSuspense(authRoutes),
  withSuspense(adminRoutes),
  withSuspense(mainRoutes),
])
