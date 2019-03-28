export interface Palette {
    fontColor: string;
    secondaryFontColor: string;
    fontColorContrast: string;
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
    secondaryFontColor: 'gray',
    fontColorContrast: white,
    activeColor: 'blue',
    hoverColor: 'blue',
    backgroundColor: white,
    borderColor: 'gray',
    secondaryBackgroundColor: 'gray',
    errorColor: 'red',
};

export default palette;
