import { PrimitivesColors, SemanticColors } from '../tokens/colors';
import { Typography } from '../tokens/typography';

export function sortObjectKeys<T extends object>(obj: T): T {
  const sortedObj = Object.entries(obj)
    .sort()
    .reduce((o, [k, v]) => {
      const newObj: T = { ...o, [k]: v };

      return newObj;
    }, {} as T);

  return sortedObj;
}

export const getPrimitivesColors = (colors: PrimitivesColors) =>
  Object.keys(sortObjectKeys(colors))
    .map((key) => {
      return {
        name: key,
        colors: colors[key],
      };
    })
    .sort((a, b) => {
      // Figma order
      const order = ['Black', 'White', 'Blue', 'Yellow', 'Red', 'Green'];

      return order.indexOf(a.name) - order.indexOf(b.name);
    });

export const getSemanticColors = (colors: SemanticColors) => {
  return Object.entries(sortObjectKeys<SemanticColors>(colors))
    .map(([name, { description, ...restColors }]) => {
      // Renamed 'colors' to 'restColors'
      return {
        name,
        description,
        colors: restColors, // Updated variable name here
      };
    })
    .sort((a, b) => {
      // Figma order
      const order = [
        'primary',
        'primaryHover',
        'primaryPressed',
        'secondary',
        'secondaryHover',
        'secondaryPressed',
        'tertiary',
        'link',
        'invert',
        'dimmed',
        'error',
        'value',
        'highlight',
        'modal',
        'checkbox',
        'positive',
        'positiveLight',
        'warning',
        'warningLight',
        'negative',
        'negativeLight',
        'light',
        'default',
        'medium',
        'opaque',
        'error',
        'active',
        'light',
        'medium',
        'dark',
        'business',
        'personal',
        'destructive',
        'destructiveHover',
        'destructivePressed',
        'disabled',
        'disabledLight',
        'filter',
        'line',
        'start',
        'end',
        'stop',
        'default',
        'invert',
        'blue',
        'red',
      ];

      return order.indexOf(a.name) - order.indexOf(b.name);
    });
};

export const getTypographySizes = (typography: Typography) => {
  return Object.entries(typography).reduce(
    (acc, [, { fontSize }]) => [
      ...acc,
      Number(fontSize?.toString().replace('px', '')),
    ],
    [] as number[]
  );
};
