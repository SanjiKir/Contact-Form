export interface Palette {
    fontColor: string;
    secondaryFontColor: string;
    fontColorContrast: string;
    defaultHoverColor: string;
    defaultActiveColor: string;
    activeColor: string;
    hoverColor: string;
    backgroundColor: string;
    secondaryBackgroundColor: string;
    borderColor: string;
    errorColor: string;
}

const white = '#ffffff';

export const palette: Palette = {
    fontColor: '#000000',
    secondaryFontColor: '#737476',
    fontColorContrast: white,
    defaultHoverColor: '#E1E2E480',
    defaultActiveColor: '#E1E2E4',
    activeColor: '#0264E1',
    hoverColor: 'blue',
    backgroundColor: white,
    borderColor: 'gray',
    secondaryBackgroundColor: '#E1E2E4',
    errorColor: 'red',
};

export default palette;
