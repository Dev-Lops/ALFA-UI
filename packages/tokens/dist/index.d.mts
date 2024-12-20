declare const colors: {
    white: string;
    black: string;
    gray100: string;
    gray200: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    lime200: string;
    lime300: string;
    lime400: string;
    lime500: string;
    lime700: string;
    lime900: string;
};

declare const space: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    10: string;
    12: string;
    16: string;
    20: string;
    40: string;
    64: string;
    80: string;
};

declare const radii: {
    px: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
};

declare const fonts: {
    default: string;
    heading: string;
    paragraph: string;
    title: string;
    code: string;
};

declare const fontSizes: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
    '8xl': string;
    '9xl': string;
};

declare const fontWeights: {
    light: string;
    regular: string;
    medium: string;
    bold: string;
};

declare const lineHeights: {
    shorter: string;
    short: string;
    base: string;
    tall: string;
};

declare const boxShadow: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
};

declare const opacity: {
    0: string;
    25: string;
    50: string;
    75: string;
    100: string;
};

declare const animation: {
    durations: {
        fast: string;
        normal: string;
        slow: string;
    };
    easings: {
        easeIn: string;
        easeOut: string;
        easeInOut: string;
    };
    keyframes: {
        fadeIn: {
            from: {
                opacity: number;
            };
            to: {
                opacity: number;
            };
        };
        slideIn: {
            from: {
                transform: string;
            };
            to: {
                transform: string;
            };
        };
        pulse: {
            '0%': {
                transform: string;
            };
            '50%': {
                transform: string;
            };
            '100%': {
                transform: string;
            };
        };
    };
};

export { animation, boxShadow, colors, fontSizes, fontWeights, fonts, lineHeights, opacity, radii, space };
