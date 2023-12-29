import { CSSProperties } from 'react';

export enum FontTypes {
  headingXXL = 'headingXXL',
  headingXL = 'headingXL',
  headingL = 'headingL',
  headingM = 'headingM',
  headingS = 'headingS',
  headingXS = 'headingXS',
  bodyL = 'bodyL',
  bodyM = 'bodyM',
  bodyS = 'bodyS',
  allcaps = 'allcaps',
}

export enum FontWeight {
  thin = 100,
  extralight = 200,
  ligth = 300,
  normal = 400,
  medium = 500,
  semibold = 600,
  bold = 700,
  extrabold = 800,
  black = 900,
}

export type TypographyType = {
  fontSize: string;
  lineHeight: string;
  fontFamily: string;
  letterSpacing: string;
  textTransform?: string;
  fontStyle?: string;
  fontVariant?: string;
  fontWeight: FontWeight;
  fontWeights: FontWeight[];
};

export type Typography = {
  [key in FontTypes as string]: CSSProperties & { fontWeights: FontWeight[] };
};

const originalfonts = {
  semibold: 'Graphik-Semibold',
  regular: 'Graphik-Regular',
  medium: 'Graphik-Medium',
};

const webfontkit = {
  semibold: 'graphiksemibold',
  regular: 'graphik_regularregular',
  medium: 'graphikmedium',
};

const fontset = originalfonts;

export const fontFamily = `"${fontset.regular}", Helvetica, sans-serif`;

export const fontFamilySans = `"${fontset.regular}", Helvetica, sans-serif`;

export const fontFamilyBody = `"${fontset.regular}", Helvetica, sans-serif`;

export const fontFamilyDisplay = `"${fontset.medium}", Helvetica, sans-serif`;

export const typography: Typography = {
  [FontTypes.headingXXL]: {
    fontSize: '48px',
    lineHeight: '105%',
    fontFamily: `"${fontset.semibold}", Helvetica, sans-serif`,
    letterSpacing: '-0.02em',
    fontWeight: FontWeight.semibold,
    fontWeights: [FontWeight.semibold, FontWeight.normal],
  },
  [FontTypes.headingXL]: {
    fontSize: '36px',
    lineHeight: '115%',
    fontFamily: `"${fontset.semibold}", Helvetica, sans-serif`,
    letterSpacing: '-0.02em',
    fontWeight: FontWeight.semibold,
    fontWeights: [FontWeight.semibold, FontWeight.normal],
  },
  [FontTypes.headingL]: {
    fontSize: '28px',
    lineHeight: '125%',
    fontFamily: `"${fontset.semibold}", Helvetica, sans-serif`,
    letterSpacing: '-0.02em',
    fontWeight: FontWeight.semibold,
    fontWeights: [FontWeight.semibold, FontWeight.normal],
  },
  [FontTypes.headingM]: {
    fontSize: '24px',
    lineHeight: '130%',
    fontFamily: `"${fontset.semibold}", Helvetica, sans-serif`,
    letterSpacing: '-0.01em',
    fontWeight: FontWeight.semibold,
    fontWeights: [FontWeight.semibold, FontWeight.normal],
  },
  [FontTypes.headingS]: {
    fontSize: '20px',
    lineHeight: '135%',
    fontFamily: `"${fontset.semibold}", Helvetica, sans-serif`,
    letterSpacing: '-0.01em',
    fontWeight: FontWeight.semibold,
    fontWeights: [FontWeight.semibold, FontWeight.normal],
  },
  [FontTypes.headingXS]: {
    fontSize: '18px',
    lineHeight: '140%',
    fontFamily: `"${fontset.semibold}", Helvetica, sans-serif`,
    letterSpacing: '-0.01em',
    fontWeight: FontWeight.semibold,
    fontWeights: [FontWeight.semibold, FontWeight.normal],
  },
  [FontTypes.bodyL]: {
    fontSize: '16px',
    lineHeight: '150%',
    fontFamily: `"${fontset.regular}", Helvetica, sans-serif`,
    letterSpacing: '0em',
    fontWeight: FontWeight.normal,
    fontWeights: [FontWeight.semibold, FontWeight.normal, FontWeight.medium],
  },
  [FontTypes.bodyM]: {
    fontSize: '14px',
    lineHeight: '22px', // 22px || 155%
    fontFamily: `"${fontset.regular}", Helvetica, sans-serif`,
    letterSpacing: '0em',
    fontWeight: FontWeight.normal,
    fontWeights: [FontWeight.semibold, FontWeight.normal, FontWeight.medium],
  },
  [FontTypes.bodyS]: {
    fontSize: '12px',
    lineHeight: '165%',
    fontFamily: `"${fontset.regular}", Helvetica, sans-serif`,
    letterSpacing: '0em',
    fontWeight: FontWeight.normal,
    fontWeights: [FontWeight.semibold, FontWeight.normal, FontWeight.medium],
  },
  [FontTypes.allcaps]: {
    fontSize: '10px',
    lineHeight: '120%',
    fontFamily: `"${fontset.regular}", Helvetica, sans-serif`,
    letterSpacing: '0.05em',
    fontVariant: 'small-caps',
    fontWeight: FontWeight.normal,
    fontWeights: [FontWeight.semibold, FontWeight.normal],
  },
};
