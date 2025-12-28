import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './app';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root container missing');
}

createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div className="flex h-screen items-center justify-center text-primary">Loading…</div>}>
      <App />
    </Suspense>
  </QueryClientProvider>,
);
