import autoPrefix from 'autoprefixer';
import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';
import plugin from 'tailwindcss/plugin';

import { semanticColors } from '../tokens/colors';
import { radii } from '../tokens/radius';
import { shadows } from '../tokens/shadows';
import { spacing } from '../tokens/spacing';
import {
  fontFamilyBody,
  fontFamilyDisplay,
  fontFamilySans,
  typography,
} from '../tokens/typography';
import {
  extractColors,
  extractRadiis,
  extractShadows,
  extractSpacing,
  extractTypography,
  fromHSLA,
} from './utils';

// tailwind preset for MileIQ
export default {
  darkMode: 'class',
  safelist: ['dark'],
  content: [],
  plugins: [autoPrefix, animatePlugin, mileiqPlugin()],
} satisfies Config;

function mileiqPlugin() {
  const radius = extractRadiis(radii, '--radii');

  return plugin(
    function ({ addBase }) {
      addBase({
        'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
        },
        'input[type=number]': { '-moz-appearance': 'textfield' },
        '[type="search"]::-webkit-search-decoration': { display: 'none' },
        '[type="search"]::-webkit-search-cancel-button': { display: 'none' },
        '[type="search"]::-webkit-search-results-button': { display: 'none' },
        '[type="search"]::-webkit-search-results-decoration': {
          display: 'none',
        },
        '[type=password]::-ms-reveal': { display: 'none' },
        '[type=password]::-ms-clear': { display: 'none' },

        ':root': {
          '--font-sans': fontFamilySans,
          '--font-body': fontFamilyBody,
          '--font-display': fontFamilyDisplay,
          '--background': fromHSLA(semanticColors.Surface.primary.light),
          '--foreground': fromHSLA(semanticColors.Text.primary.light),
          '--card': '0 0% 100%',
          '--card-foreground': '222.2 84% 4.9%',
          '--popover': '0 0% 100%',
          '--popover-foreground': '222.2 84% 4.9%',
          '--text-primary': fromHSLA(semanticColors.Text.primary.light),
          '--text-secondary': fromHSLA(semanticColors.Text.secondary.light),
          '--text-tertiary': fromHSLA(semanticColors.Text.tertiary.light),
          /**
          '--primary': fromHSLA(semanticColors.Interaction.primary.light),
          '--primary-foreground': fromHSLA(semanticColors.Text.invert.light),
          '--primary-hover': fromHSLA(
            semanticColors.Interaction.primaryHover.light
          ),
          '--primary-pressed': fromHSLA(
            semanticColors.Interaction.primaryPressed.light
          ),
          '--primary-disabled': fromHSLA(
            semanticColors.Interaction.disabled.light
          ),
          '--secondary': fromHSLA(semanticColors.Interaction.secondary.light),
          '--secondary-foreground': fromHSLA(semanticColors.Text.primary.light),
          '--secondary-hover': fromHSLA(
            semanticColors.Interaction.secondaryHover.light
          ),
          '--secondary-pressed': fromHSLA(
            semanticColors.Interaction.secondaryPressed.light
          ),
          '--secondary-disabled': fromHSLA(
            semanticColors.Interaction.secondary.light
          ),
          '--business': fromHSLA(semanticColors.Interaction.business.light),
          '--personal': fromHSLA(semanticColors.Interaction.personal.light),
          // */
          '--muted': '210 40% 96.1%',
          '--muted-foreground': '215.4 16.3% 46.9%',
          '--accent': '210 40% 96.1%',
          '--accent-foreground': '222.2 47.4% 11.2%',
          '--destructive': fromHSLA(
            semanticColors.Interaction.destructive.light
          ),
          '--destructive-foreground': fromHSLA(
            semanticColors.Text.invert.light
          ),
          '--destructive-hover': fromHSLA(
            semanticColors.Interaction.destructiveHover.light
          ),
          '--destructive-pressed': fromHSLA(
            semanticColors.Interaction.destructivePressed.light
          ),
          '--destructive-disabled': fromHSLA(
            semanticColors.Interaction.disabled.light
          ),
          '--border': '214.3 31.8% 91.4%',
          '--input': '214.3 31.8% 91.4%',
          '--ring': '0 0% 9%',
          '--radius': radii.M.value,
          ...extractColors(semanticColors).light,
          ...extractSpacing(spacing).base,
          ...extractTypography(typography).base,
          ...extractShadows(shadows).base,
          ...radius.base,
        },
        '.dark': {
          '--background': fromHSLA(semanticColors.Surface.primary.dark),
          '--foreground': fromHSLA(semanticColors.Text.primary.dark),
          '--card': '222.2 84% 4.9%',
          '--card-foreground': '210 40% 98%',
          '--popover': '222.2 84% 4.9%',
          '--popover-foreground': '210 40% 98%',
          '--text-primary': fromHSLA(semanticColors.Text.primary.dark),
          '--text-secondary': fromHSLA(semanticColors.Text.secondary.dark),
          '--text-tertiary': fromHSLA(semanticColors.Text.tertiary.dark),
          /**
          '--primary': fromHSLA(semanticColors.Interaction.primary.dark),
          '--primary-foreground': fromHSLA(semanticColors.Text.invert.dark),
          '--primary-hover': fromHSLA(
            semanticColors.Interaction.primaryHover.dark
          ),
          '--primary-pressed': fromHSLA(
            semanticColors.Interaction.primaryPressed.dark
          ),
          '--primary-disabled': fromHSLA(
            semanticColors.Interaction.disabled.dark
          ),
          '--secondary': fromHSLA(semanticColors.Interaction.secondary.dark),
          '--secondary-foreground': fromHSLA(semanticColors.Text.primary.dark),
          '--secondary-hover': fromHSLA(
            semanticColors.Interaction.secondaryHover.dark
          ),
          '--secondary-pressed': fromHSLA(
            semanticColors.Interaction.secondaryPressed.dark
          ),
          '--secondary-disabled': fromHSLA(
            semanticColors.Interaction.secondary.dark
          ),
          '--business': fromHSLA(semanticColors.Interaction.business.dark),
          '--personal': fromHSLA(semanticColors.Interaction.personal.dark),
          // */
          '--muted': '217.2 32.6% 17.5%',
          '--muted-foreground': '215 20.2% 65.1%',
          '--accent': '217.2 32.6% 17.5%',
          '--accent-foreground': '210 40% 98%',
          '--destructive': fromHSLA(
            semanticColors.Interaction.destructive.dark
          ),
          '--destructive-foreground': fromHSLA(semanticColors.Text.invert.dark),
          '--destructive-hover': fromHSLA(
            semanticColors.Interaction.destructiveHover.dark
          ),
          '--destructive-pressed': fromHSLA(
            semanticColors.Interaction.destructivePressed.dark
          ),
          '--destructive-disabled': fromHSLA(
            semanticColors.Interaction.disabled.dark
          ),
          '--border': '217.2 32.6% 17.5%',
          '--input': '217.2 32.6% 17.5%',
          '--ring': '212.7 26.8% 83.9%',
          ...extractColors(semanticColors).dark,
        },
      });
      addBase({
        '*': {
          '@apply border-border': {},
        },
        body: {
          '@apply bg-background text-foreground': {},
        },
      });
    },
    {
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px',
          },
        },
        extend: {
          colors: {
            border: 'hsla(var(--border))',
            input: 'hsla(var(--input))',
            ring: 'hsla(var(--ring) / 0.6)',
            background: 'hsla(var(--background))',
            foreground: 'hsla(var(--foreground))',
            primary: {
              DEFAULT: 'hsla(var(--color-interaction-primary))',
              hover: 'hsla(var(--color-interaction-primary-hover))',
              pressed: 'hsla(var(--color-interaction-primary-pressed))',
              disabled: 'hsla(var(--color-interaction-secondary))',
              foreground: {
                DEFAULT: 'hsla(var(--color-text-invert))',
                disabled: 'hsla(var(--color-text-tertiary))',
              },
            },
            secondary: {
              DEFAULT: 'hsla(var(--color-interaction-secondary))',
              hover: 'hsla(var(--color-interaction-secondary-hover))',
              pressed: 'hsla(var(--color-interaction-secondary-pressed))',
              disabled: 'hsla(var(--color-interaction-secondary))',
              foreground: {
                DEFAULT: 'hsla(var(--color-text-primary))',
                disabled: 'hsla(var(--color-text-tertiary))',
              },
            },
            tertiary: {
              DEFAULT: 'none',
              hover: 'hsla(var(--color-interaction-secondary))',
              pressed: 'hsla(var(--color-interaction-secondary-hover))',
              disabled: 'none',
              foreground: {
                DEFAULT: 'hsla(var(--color-text-primary))',
                disabled: 'hsla(var(--color-text-tertiary))',
              },
            },
            destructive: {
              DEFAULT: 'hsla(var(--color-interaction-destructive))',
              hover: 'hsla(var(--color-interaction-destructive-hover))',
              pressed: 'hsla(var(--color-interaction-destructive-pressed))',
              disabled: 'hsla(var(--color-interaction-secondary))',
              foreground: {
                DEFAULT: 'hsla(var(--color-text-invert))',
                disabled: 'hsla(var(--color-text-tertiary))',
              },
            },
            business: {
              DEFAULT: 'hsla(var(--color-interaction-business))',
              hover: 'hsla(203, 54%, 81%, 1)',
              pressed: 'hsla(202, 40%, 76%, 1)',
              disabled: 'hsla(var(--color-interaction-secondary))',
              foreground: {
                DEFAULT: `hsla(${fromHSLA(semanticColors.Text.primary.light)})`,
                disabled: 'hsla(var(--color-text-tertiary))',
              },
            },
            personal: {
              DEFAULT: 'hsla(var(--color-interaction-personal))',
              hover: 'hsla(41, 59%, 80%, 1)',
              pressed: 'hsla(41, 46%, 75%, 1)',
              disabled: 'hsla(var(--color-interaction-secondary))',
              foreground: {
                DEFAULT: `hsla(${fromHSLA(semanticColors.Text.primary.light)})`,
                disabled: 'hsla(var(--color-text-tertiary))',
              },
            },
            outline: {
              DEFAULT: 'hsla(var(--color-surface-primary))',
              hover: 'hsla(var(--color-surface-primary))',
              pressed: 'hsla(var(--color-surface-highlight))',
              disabled: 'hsla(var(--color-surface-primary))',
              foreground: {
                DEFAULT: 'hsla(var(--color-text-primary))',
                disabled: 'hsla(var(--color-text-primary))',
              },
            },
            muted: {
              DEFAULT: 'hsla(var(--muted))',
              foreground: 'hsla(var(--muted-foreground))',
            },
            accent: {
              DEFAULT: 'hsla(var(--accent))',
              foreground: 'hsla(var(--accent-foreground))',
            },
            popover: {
              DEFAULT: 'hsla(var(--popover))',
              foreground: 'hsla(var(--popover-foreground))',
            },
            card: {
              DEFAULT: 'hsla(var(--card))',
              foreground: 'hsla(var(--card-foreground))',
            },
          },
          spacing: {
            ...extractSpacing(spacing).theme,
          },
          fontSize: {
            ...extractTypography(typography).theme,
          },
          boxShadow: {
            ...extractShadows(shadows).theme,
            'filterButton-shadow-default':
              '0 2px 4px 0 rgba(0, 0, 0, 0.08), inset 0 0px 0px 1px hsla(var(--color-border-default))',
            'filterButton-shadow-hover':
              '0 2px 4px 0 rgba(0, 0, 0, 0.08), inset 0 0px 0px 2px hsla(var(--color-interaction-primary))',
            'filterButton-shadow-disabled':
              'inset 0 0px 0px 2px hsla(var(--color-border-default)), 0 0px 0px 2px hsla(var(--color-interaction-focus))',
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'var(--radiiM)',
            sm: 'calc(var(--radius) - 4px)',
            ...radius.theme,
          },
          fontFamily: {
            sans: 'var(--font-sans)',
            body: 'var(--font-body)',
            display: 'var(--font-display)',
          },
        },
      },
    }
  );
}
