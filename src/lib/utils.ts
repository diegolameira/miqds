import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { SemanticColors } from '../tokens/colors';
import { Radii } from '../tokens/radius';
import { Shadows } from '../tokens/shadows';
import { Spacing } from '../tokens/spacing';
import { Typography } from '../tokens/typography';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fromHSLA(hsla: string) {
  const [h, s, l, a] = hsla
    .replace('hsla(', '')
    .replace(')', '')
    .split(',')
    .map((x: string) => x.trim());

  return `${h} ${s} ${l} / ${a ?? 1}`;
}

export function toHSLA(hsl: string) {
  const [h, s, l, a] = hsl.split(' ');

  return `hsla(${h}, ${s}, ${l} / ${a ?? 1})`;
}

export function extractRadiis(radii: Radii, prefix: string) {
  return Object.entries(radii).reduce(
    (acc, [key, value]) => {
      const newKey = `${prefix}${key}`;

      return {
        theme: {
          ...acc.theme,
          [`radii${key}`]: `var(${newKey})`,
        },
        base: {
          ...acc.base,
          [newKey]: value?.value,
        },
      };
    },
    { theme: {}, base: {} }
  );
}

export function extractColors(semanticColors: SemanticColors) {
  const result = {
    light: {},
    dark: {},
  };

  Object.keys(semanticColors).forEach((category) => {
    const lowerCaseCategory = category.toLowerCase();

    Object.keys(semanticColors[category]).forEach((variant) => {
      // snake case the variant with dash and all lower case
      const snakeCaseVariant = variant.replace(
        /([A-Z])/g,
        (g) => `-${g[0].toLowerCase()}`
      );

      const variantColor = semanticColors[category][variant];

      (result.light as Record<string, string>)[
        `--color-${lowerCaseCategory}-${snakeCaseVariant}`
      ] = fromHSLA(variantColor.light);
      (result.dark as Record<string, string>)[
        `--color-${lowerCaseCategory}-${snakeCaseVariant}`
      ] = fromHSLA(variantColor.dark);
    });
  });

  return result;
}

export function extractSpacing(spacing: Spacing) {
  return Object.entries(spacing).reduce(
    (acc, [key, value]) => {
      return {
        theme: {
          ...acc.theme,
          [key]: `var(--spacing-${key})`,
        },
        base: {
          ...acc.base,
          [`--spacing-${key}`]: value,
        },
      };
    },
    { theme: {}, base: {} }
  );
}

export function extractTypography(typography: Typography) {
  return Object.entries(typography).reduce(
    (acc, [key, value]) => {
      const items: Record<string, [string, Record<string, unknown>]> = {};

      value?.fontWeights.forEach((w) => {
        items[`${key}-${w}`] = [
          value.fontSize as string,
          {
            fontFamily: value.fontFamily,
            lineHeight: value.lineHeight,
            letterSpacing: value.letterSpacing,
            fontWeight: w,
          },
        ];
      });

      return {
        theme: {
          ...acc.theme,
          ...items,
        },
        base: {
          ...acc.base,
        },
      };
    },
    {
      theme: {},
      base: {},
    }
  );
}

export function extractShadows(shadows: Shadows) {
  return Object.entries(shadows).reduce(
    (acc, [key, value]) => {
      return {
        theme: {
          ...acc.theme,
          [key]: `var(--shadow-${key})`,
        },
        base: {
          ...acc.base,
          [`--shadow-${key}`]: value.value,
        },
      };
    },
    { theme: {}, base: {} }
  );
}
