import MainLayout from 'layouts/MainLayout';
import { lazy, Suspense } from 'react';
import { createHashRouter } from 'react-router-dom';

const Index = lazy(() => import('pages/Index'));

const router: ReturnType<typeof createHashRouter> = createHashRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<></>}>
        <MainLayout>
          <Index />
        </MainLayout>
      </Suspense>
    ),
  },
  {
    path: '/settings',
    element: (
      <Suspense fallback={<></>}>
        <MainLayout>
          <Index />
        </MainLayout>
      </Suspense>
    ),
  },
  {
    path: '/logging',
    element: (
      <Suspense fallback={<></>}>
        <MainLayout>
          <Index />
        </MainLayout>
      </Suspense>
    ),
  },
  {
    path: '/editor',
    element: (
      <Suspense fallback={<></>}>
        <MainLayout>
          <Index />
        </MainLayout>
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<></>}>
        <MainLayout>
          <Index />
        </MainLayout>
      </Suspense>
    ),
  },
]);

export default router;
