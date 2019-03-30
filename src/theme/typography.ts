export interface Typography {
    fontFamily: string;
    input: InputTypography;
    listItem: TypogarphyVariant;
    body: TypogarphyVariant;
    heading: TypogarphyVariant;
    button: TypogarphyVariant;
}

export interface InputTypography {
    large: TypogarphyVariant;
    normal: TypogarphyVariant;
    placeholder: TypogarphyVariant;
    label: TypogarphyVariant;
}

export interface TypogarphyVariant {
    fontSize: string;
    fontWeight: number;
}

export const typography: Typography = {
    fontFamily: 'Roboto',
    heading: {
        fontSize: '3rem',
        fontWeight: 500,
    },
    input: {
        large: {
            fontSize: '1.8rem',
            fontWeight: 500,
        },
        normal: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        placeholder: {
            fontSize: '1.8rem',
            fontWeight: 500,
        },
        label: {
            fontSize: '1.5rem',
            fontWeight: 400,
        },
    },
    listItem: {
        fontSize: '1.3rem',
        fontWeight: 500,
    },
    button: {
        fontSize: '1.5rem',
        fontWeight: 400,
    },
    body: {
        fontSize: '1.5rem',
        fontWeight: 400,
    },
};

export default typography;
