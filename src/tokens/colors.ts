export interface PrimitivesColors {
  [key: string]: {
    [key: string]: string;
  };
}

export interface VariantColor {
  description: string;
  light: string;
  dark: string;
}

export interface SemanticColors {
  [key: string]: {
    [key: string]: VariantColor;
  };
}

export const primitivesColors: PrimitivesColors = {
  Black: {
    Black30: 'hsla(60, 7%, 97%, 1)',
    Black60: 'hsla(0, 0%, 9%, 0.06)',
    Black120: 'hsla(0, 0%, 9%, 0.12)',
    Black300: 'hsla(0, 0%, 9%, 0.3)',
    Black600: 'hsla(0, 0%, 9%, 0.6)',
    Black800: 'hsla(0, 0%, 9%, 0.8)',
    Black1000: 'hsla(0, 0%, 9%, 1)',
  },

  White: {
    White30: 'hsla(0, 0%, 100%, 0.03)',
    White60: 'hsla(0, 0%, 100%, 0.06)',
    White120: 'hsla(0, 0%, 100%, 0.12)',
    White300: 'hsla(0, 0%, 100%, 0.3)',
    White600: 'hsla(0, 0%, 100%, 0.6)',
    White800: 'hsla(0, 0%, 100%, 0.8)',
    White1000: 'hsla(0, 0%, 100%, 1)',
  },

  Blue: {
    Blue100: 'hsla(200, 100%, 97%, 1)',
    Blue200: 'hsla(199, 100%, 92%, 1)',
    Blue300: 'hsla(199, 81%, 84%, 1)',
    // 'Blue300/60': 'hsla(203, 54%, 81%, 1)', // for business hover
    // 'Blue300/120': 'hsla(202, 40%, 76%, 1)', // for business pressed
    Blue500: 'hsla(214, 73%, 47%, 1)',
    Blue700: 'hsla(216, 90%, 33%, 1)',
    Blue900: 'hsla(215, 90%, 20%, 1)',
  },

  Yellow: {
    Yellow100: 'hsla(40, 100%, 97%, 1)',
    Yellow200: 'hsla(41, 100%, 92%, 1)',
    Yellow300: 'hsla(39, 93%, 84%, 1)',
    // 'Yellow300/60': 'hsla(41, 59%, 80%, 1)', // for personal hover
    // 'Yellow300/120': 'hsla(41, 46%, 75%, 1)', // for personal pressed
    Yellow500: 'hsla(40, 100%, 50%, 1)',
    Yellow700: 'hsla(34, 94%, 38%, 1)',
    Yellow900: 'hsla(34, 90%, 17%, 1)',
  },

  Red: {
    Red100: 'hsla(8, 100%, 97%, 1)',
    Red200: 'hsla(7, 100%, 95%, 1)',
    Red300: 'hsla(7, 100%, 90%, 1)',
    Red500: 'hsla(7, 89%, 45%, 1)',
    Red700: 'hsla(0, 100%, 33%, 1)',
    Red900: 'hsla(0, 100%, 20%, 1)',
  },

  Green: {
    Green100: 'hsla(83, 87%, 97%, 1)',
    Green200: 'hsla(80, 80%, 92%, 1)',
    Green300: 'hsla(73, 93%, 84%, 1)',
    Green500: 'hsla(138, 76%, 28%, 1)',
    Green700: 'hsla(138, 76%, 18%, 1)',
    Green900: 'hsla(138, 76%, 10%, 1)',
  },
};

export const semanticColors: SemanticColors = {
  Text: {
    primary: {
      description: 'Use for titles and most text',
      light: primitivesColors.Black.Black1000,
      dark: primitivesColors.White.White1000,
    },
    secondary: {
      description: 'Use for paragraphs',
      light: primitivesColors.Black.Black800,
      dark: primitivesColors.White.White800,
    },
    tertiary: {
      description: 'Use for less important texts and input placeholders',
      light: primitivesColors.Black.Black600,
      dark: primitivesColors.White.White600,
    },
    link: {
      description: 'Use for text links',
      light: primitivesColors.Blue.Blue500,
      dark: primitivesColors.Blue.Blue500,
    },
    invert: {
      description: 'Use for texts on dark backgrounds',
      light: primitivesColors.White.White1000,
      dark: primitivesColors.White.White1000, // White60
    },
    dimmed: {
      description: 'Use for mileage counter on the mobile app',
      light: primitivesColors.Black.Black120,
      dark: primitivesColors.White.White120,
    },
    error: {
      description: 'Use for input error text',
      light: primitivesColors.Red.Red500,
      dark: primitivesColors.Red.Red500,
    },
    value: {
      description: 'Use for values',
      light: primitivesColors.Green.Green500,
      dark: primitivesColors.Green.Green300,
    },
  },
  Surface: {
    primary: {
      description: 'Use as the default background on most screens',
      light: primitivesColors.White.White1000,
      dark: primitivesColors.Black.Black1000,
    },
    secondary: {
      description: 'Use for cards, sidebars and banners',
      light: primitivesColors.Black.Black30,
      dark: primitivesColors.White.White60,
    },
    highlight: {
      description: 'Use for selected states, current links and hovers',
      light: primitivesColors.Black.Black60,
      dark: primitivesColors.White.White120,
    },
    modal: {
      description: 'Use for selected states, current links and hovers',
      light: primitivesColors.White.White1000,
      dark: primitivesColors.White.White120,
    },
    checkbox: {
      description: 'Use for selected states, current links and hovers',
      light: primitivesColors.Black.Black1000,
      dark: primitivesColors.White.White1000,
    },
    positive: {
      description: 'Use for positive alerts',
      light: primitivesColors.Green.Green500,
      dark: primitivesColors.Green.Green500,
    },
    positiveLight: {
      description: 'Use for positive alerts',
      light: primitivesColors.Green.Green200,
      dark: primitivesColors.Green.Green900,
    },
    warning: {
      description: 'Use for warnings',
      light: primitivesColors.Yellow.Yellow500,
      dark: primitivesColors.Yellow.Yellow500,
    },
    warningLight: {
      description: 'Use for warnings',
      light: primitivesColors.Yellow.Yellow200,
      dark: primitivesColors.Yellow.Yellow900,
    },
    negative: {
      description: 'Use for errors and critical warnings',
      light: primitivesColors.Red.Red500,
      dark: primitivesColors.Red.Red500,
    },
    negativeLight: {
      description: 'Use for errors and critical warnings',
      light: primitivesColors.Red.Red200,
      dark: primitivesColors.Red.Red900,
    },
  },
  Border: {
    light: {
      description: 'Use for ...',
      light: primitivesColors.Black.Black60,
      dark: primitivesColors.White.White60,
    },
    default: {
      description: 'Use for most borders and dividers',
      light: primitivesColors.Black.Black120,
      dark: primitivesColors.White.White120,
    },
    medium: {
      description: 'Use for checkboxes',
      light: primitivesColors.Black.Black300,
      dark: primitivesColors.White.White300,
    },
    opaque: {
      description: 'Use for ...',
      light: primitivesColors.Black.Black1000,
      dark: primitivesColors.White.White1000,
    },
    error: {
      description: 'Use for active filters and current tab',
      light: primitivesColors.Red.Red500,
      dark: primitivesColors.Red.Red500,
    },
    active: {
      description: 'Use for active filters and current tab',
      light: primitivesColors.Blue.Blue500,
      dark: primitivesColors.Blue.Blue500,
    },
  },
  Overlay: {
    light: {
      description:
        'Use for situations where background context must be visible',
      light: primitivesColors.Black.Black300,
      dark: primitivesColors.Black.Black300,
    },
    medium: {
      description: 'Use for most modals',
      light: primitivesColors.Black.Black600,
      dark: primitivesColors.Black.Black600,
    },
    dark: {
      description: 'Use for tutorials',
      light: primitivesColors.Black.Black800,
      dark: primitivesColors.Black.Black800,
    },
  },
  Interaction: {
    primary: {
      description: 'Use for primary buttons',
      light: primitivesColors.Blue.Blue500,
      dark: primitivesColors.Blue.Blue500,
    },
    primaryHover: {
      description: 'Hover state of the primary button',
      light: primitivesColors.Blue.Blue700,
      dark: primitivesColors.Blue.Blue700,
    },
    primaryPressed: {
      description: 'Pressed state of the primary button',
      light: primitivesColors.Blue.Blue900,
      dark: primitivesColors.Blue.Blue900,
    },
    secondary: {
      description: 'Use for secondary buttons',
      light: primitivesColors.Black.Black60,
      dark: primitivesColors.White.White60,
    },
    secondaryHover: {
      description: 'Hover state of the secondary button',
      light: primitivesColors.Black.Black120,
      dark: primitivesColors.White.White120,
    },
    secondaryPressed: {
      description: 'Pressed state of the secondary button',
      light: primitivesColors.Black.Black300,
      dark: primitivesColors.White.White300,
    },
    business: {
      description:
        'Use for business button on web and business label on mobile',
      light: primitivesColors.Blue.Blue300,
      dark: primitivesColors.Blue.Blue300,
    },
    businessHover: {
      description: '...',
      light: primitivesColors.Blue.Blue300,
      dark: primitivesColors.Blue.Blue300,
    },
    businessPressed: {
      description: '...',
      light: primitivesColors.Blue.Blue300,
      dark: primitivesColors.Blue.Blue300,
    },
    personal: {
      description:
        'Use for personal button on web and personal label on mobile',
      light: primitivesColors.Yellow.Yellow300,
      dark: primitivesColors.Yellow.Yellow300,
    },
    personalHover: {
      description: '...',
      light: primitivesColors.Yellow.Yellow300,
      dark: primitivesColors.Yellow.Yellow300,
    },
    personalPressed: {
      description: '...',
      light: primitivesColors.Yellow.Yellow300,
      dark: primitivesColors.Yellow.Yellow300,
    },
    destructive: {
      description: 'Use for destructive action buttons',
      light: primitivesColors.Red.Red500,
      dark: primitivesColors.Red.Red500,
    },
    destructiveHover: {
      description: 'Hover state of the destructive button',
      light: primitivesColors.Red.Red700,
      dark: primitivesColors.Red.Red700,
    },
    destructivePressed: {
      description: 'Pressed state of the destructive button',
      light: primitivesColors.Red.Red900,
      dark: primitivesColors.Red.Red900,
    },
    disabled: {
      description: 'Disabled state of all buttons',
      light: primitivesColors.Black.Black300,
      dark: primitivesColors.White.White300,
    },
    disabledLight: {
      description: 'Disabled state of all buttons',
      light: primitivesColors.Black.Black120,
      dark: primitivesColors.White.White120,
    },
    filter: {
      description: 'Use for filter components on the web',
      light: primitivesColors.White.White1000,
      dark: primitivesColors.White.White120,
    },
    focus: {
      description: 'Use for filter components on the web',
      light: primitivesColors.Black.Black600,
      dark: primitivesColors.White.White600,
    },
  },
  Route: {
    line: {
      description: 'Use for route line',
      light: primitivesColors.Blue.Blue500,
      dark: primitivesColors.Blue.Blue500,
    },
    start: {
      description: 'Use for start location',
      light: primitivesColors.Green.Green500,
      dark: primitivesColors.Green.Green500,
    },
    end: {
      description: 'Use for end location',
      light: primitivesColors.Red.Red500,
      dark: primitivesColors.Red.Red500,
    },
    stop: {
      description: 'Use for stop location',
      light: primitivesColors.Blue.Blue500,
      dark: primitivesColors.Blue.Blue500,
    },
  },
  Icon: {
    default: {
      description: 'Use for icons',
      light: primitivesColors.Black.Black1000,
      dark: primitivesColors.White.White1000,
    },
    invert: {
      description: 'Use for inverted icons',
      light: primitivesColors.White.White1000,
      dark: primitivesColors.Black.Black1000,
    },
    blue: {
      description: 'Use for blue icons',
      light: primitivesColors.Blue.Blue500,
      dark: primitivesColors.Blue.Blue500,
    },
    red: {
      description: 'Use for red icons',
      light: primitivesColors.Red.Red500,
      dark: primitivesColors.Red.Red500,
    },
  },
};
