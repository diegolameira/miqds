export type Shadow = {
  value: string;
  description: string;
};

export type Shadows = {
  [key: string]: Shadow;
};

export const shadows: Shadows = {
  filterButton: {
    value: '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
    description: 'Use for filter button',
  },
  card: {
    value: '0 4px 8px 0 rgba(0, 0, 0, 0.04)',
    description: 'Use for cards',
  },
  sidePanel: {
    value: '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
    description: 'Use for side panels',
  },
  dropdown: {
    value: '0 10px 20px 0 rgba(0, 0, 0, 0.15)',
    description: 'Use for dropdowns',
  },
  bottomSheet: {
    value: '0 -8px 16px 0 rgba(0, 0, 0, 0.1)',
    description: 'Use for bottom sheets',
  },
};
