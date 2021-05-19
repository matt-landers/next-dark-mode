import { useLayoutEffect as useReactLayoutEffect } from 'react';

export const useNextLayoutEffect: typeof useReactLayoutEffect =
  typeof window === 'undefined' ? () => {} : useReactLayoutEffect;
