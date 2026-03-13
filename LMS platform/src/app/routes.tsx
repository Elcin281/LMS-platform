import { createBrowserRouter } from 'react-router';
import { ErrorBoundary } from './components/ErrorBoundary';
import Home from './pages/Home';
import Programs from './pages/Programs';
import FAQ from './pages/FAQ';
import Derslikler from './pages/Derslikler';
import Imtahan from './pages/Imtahan';
import Qaydalar from './pages/Qaydalar';
import ExamTest from './pages/ExamTest';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/programlar',
    Component: Programs,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/faq',
    Component: FAQ,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/derslikler',
    Component: Derslikler,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/imtahan',
    Component: Imtahan,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/qaydalar',
    Component: Qaydalar,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: '/imtahan/:examId',
    Component: ExamTest,
    ErrorBoundary: ErrorBoundary,
  },
]);
