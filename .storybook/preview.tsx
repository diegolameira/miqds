import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import * as React from 'react';

import { DocsContainer, DocsContainerProps } from '@storybook/blocks';
import { Theme, ThemeProvider } from '../src/components/theme';
import { viewports as breakpoints } from '../src/tokens/breakpoints';
import { decorators } from './decorators';

const breakpointViewports = Object.keys(breakpoints).reduce(
  (acc, key) => {
    acc[`breakpoint${key}`] = {
      name: `Breakpoint - ${key}`,
      styles: {
        width: `${breakpoints[key as keyof typeof breakpoints]}px`,
        height: 'calc(100% - 20px)',
      },
      type: 'other',
    };
    return acc;
  },
  {} as typeof INITIAL_VIEWPORTS
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      viewports: {
        ...breakpointViewports,
        ...INITIAL_VIEWPORTS,
      },
    },
    backgrounds: {
      default: 'transparent',
      values: [
        { name: 'transparent', value: 'transparent' },
        { name: 'theme', value: 'hsla(var(--background))' },
        { name: 'white', value: '#ffffff' },
        { name: 'black', value: '#000000' },
      ],
    },
    controls: {
      // expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
      source: {
        excludeDecorators: true,
      },
      container: (props: DocsContainerProps) => (
        <ThemeProvider defaultTheme={Theme.Light}>
          <DocsContainer {...props} />
        </ThemeProvider>
      ),
    },
  },
  globalTypes: {
    theme: {
      name: 'Appearance',
      description: 'Appearance theme for components',
      defaultValue: Theme.System,
      toolbar: {
        title: 'Theme',
        items: [
          {
            value: Theme.System,
            icon: 'mirror',
            title: 'System Auto (default)',
          },
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
          {
            value: 'stackedHorizontally',
            icon: 'sidebyside',
            title: 'Side-by-side',
          },
          { value: 'stackedVertically', icon: 'stacked', title: 'Stacked' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators,
};

export default preview;
