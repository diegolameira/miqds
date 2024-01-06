// ./storybook/manager.ts
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'MileIQ Design System Storybook',
  brandUrl: 'https://mileiq.com',
  brandImage: 'logo.svg',

  colorSecondary: 'hsla(214, 73%, 47%, 1)',

  appBg: 'hsla(60, 7%, 97%, 1)',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Graphik", "graphikmedium", "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: 'hsla(214, 73%, 47%, 1)',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#333333',
  inputBorderRadius: 12,
});

addons.setConfig({
  theme,
});
