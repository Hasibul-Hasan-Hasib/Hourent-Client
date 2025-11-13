import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './routes/routes';
import AuthProvider from './providers/AuthProvider';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* React auth provider */}
    <AuthProvider>
      {/* React query */}
      <QueryClientProvider client={queryClient}>
        {/* Router Provider */}
          <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);