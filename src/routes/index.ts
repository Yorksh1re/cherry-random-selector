import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';

import Home from '@/views/home';
import Test1 from '@/views/test1';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/test1',
    component: lazy(() => import('@/views/test1')),
    data: Test1,
  },
  {
    path: '**',
    component: lazy(() => import('@/views/error/404')),
  },
];