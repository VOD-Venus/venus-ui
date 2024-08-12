import { lazy, Suspense } from 'react';
import { createHashRouter } from 'react-router-dom';

const Index = lazy(() => import('pages/Index'));

const router: ReturnType<typeof createHashRouter> = createHashRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<></>}>
        <Index />
      </Suspense>
    ),
  },
]);

export default router;
