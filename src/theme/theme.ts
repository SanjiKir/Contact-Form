import typography, { Typography } from './typography';
import palette, { Palette } from './palette';

export interface Theme {
    typography: Typography;
    palette: Palette;
    animation: Animation;
    indents: Indents;
}

export interface Animation {
    animationDuration: string;
    animationFunction: string;
}

export interface Indents {
    small: string;
    medium: string;
    large: string;
    pageTop: string;
}

export const theme = {
    typography,
    palette,
    animation: {
        animationDuration: '350ms',
        animationFunction: 'cubic-bezier(.4, 0, .2, 1)',
    },
    indents: {
        small: '0.5rem',
        medium: '1rem',
        large: '2.2rem',
        pageTop: '5rem',
    },
};

export default theme;
