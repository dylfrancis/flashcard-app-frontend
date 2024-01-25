// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const AlbumsLazyImport = createFileRoute('/albums')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const AlbumsLazyRoute = AlbumsLazyImport.update({
  path: '/albums',
  getParentRoute: () => rootRoute,
} as any).update({
  lazy: () => import('./routes/albums.lazy').then((d) => d.Route),
})

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).update({
  lazy: () => import('./routes/index.lazy').then((d) => d.Route),
})

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/albums': {
      preLoaderRoute: typeof AlbumsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AlbumsLazyRoute,
])
