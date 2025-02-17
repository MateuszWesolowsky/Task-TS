// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import { SingleViewPage } from './pages/SingleViewPage';
import { NotFoundPage } from './pages/NotFoundPage.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Navigate to="/people" />,
    path: '/',
    errorElement: <NotFoundPage />,
  },
  {
    element: <App />,
    path: '/people',
  },
  {
    element: <SingleViewPage />,
    path: '/people/:id',
  },
]);

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
  // </StrictMode>,
);
