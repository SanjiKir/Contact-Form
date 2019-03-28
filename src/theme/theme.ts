import typography, { Typography } from './typography';
import palette, { Palette } from './palette';

export interface Theme {
    typography: Typography;
    palette: Palette;
    animation: Animation;
}

export interface Animation {
    animationDuration: string;
    animationFunction: string;
}

export const theme = {
    typography,
    palette,
    animation: {
        animationDuration: '350ms',
        animationFunction: 'cubic-bezier(.4, 0, .2, 1)',
    },
};

export default theme;
