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
    dangerColor: string;
    darkDefaultHoverColor: string;
}

const white = '#ffffff';

export const palette: Palette = {
    fontColor: '#000000',
    secondaryFontColor: '#737476',
    fontColorContrast: white,
    defaultHoverColor: '#E1E2E480',
    darkDefaultHoverColor: '#949494',
    defaultActiveColor: '#E1E2E4',
    activeColor: '#0264E1',
    hoverColor: '#b3defe',
    backgroundColor: white,
    borderColor: '#C4C4C4',
    secondaryBackgroundColor: '#E1E2E4',
    dangerColor: 'red',
};

export default palette;
