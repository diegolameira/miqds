const defaultRadius = {
  none: '0',
  sm: '0.125rem', // 2px
  base: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px', // 9999px
};

export type Radii = {
  XS: {
    value: string;
    description: string;
  };
  S: {
    value: string;
    description: string;
  };
  M: {
    value: string;
    description: string;
  };
  L: {
    value: string;
    description: string;
  };
  XL: {
    value: string;
    description: string;
  };
  Full: {
    value: string;
    description: string;
  };
};

export const radii: Radii = {
  XS: {
    value: defaultRadius.base,
    description: 'Use for tags and badges',
  }, // 4px
  S: {
    value: defaultRadius.lg,
    description: 'Use for drive card inputs',
  }, // 8px
  M: {
    value: defaultRadius.xl,
    description: 'Use for inputs and buttons',
  }, // 12px
  L: {
    value: defaultRadius['2xl'],
    description: 'Use for cards',
  }, // 16px
  XL: {
    value: defaultRadius['3xl'],
    description: 'Use for modals, bottom sheets and swipe classification',
  }, // 24px
  Full: {
    value: defaultRadius.full,
    description: 'Use for FAB buttons and progress bar',
  },
};
