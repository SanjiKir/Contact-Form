import { path, compose } from 'ramda';

import { TypogarphyVariant, InputTypography, Typography } from './typography';

const getTypogaphyCSS =  (typographyVariant?: TypogarphyVariant) => {
    if (!typographyVariant) {
        throw new Error('Could find typography variant. Most likely you forgot to provide theme to your components');
    }

    return `
        font-size: ${typographyVariant.fontSize};
        font-weight: ${typographyVariant.fontWeight};
        `;
};

export type TypogarphyGetter = Typography | undefined;
export const getTypography = path<Typography>(['theme', 'typography']);

export type TypogarphyVariantGetter = TypogarphyVariant | undefined;
export const getTypographyVariant = (variant: keyof Typography) => compose<any, TypogarphyGetter, TypogarphyVariantGetter>(
    path<TypogarphyVariant>([variant]),
    getTypography
);

export const getInputTypedTypography = (type: keyof InputTypography) => compose(
    getTypogaphyCSS,
    path([type]),
    getTypographyVariant('input')
);

export const getInputLargeTypography = getInputTypedTypography('large');
export const getInputNormalTypography = getInputTypedTypography('normal');
export const getInputLabelTypography = getInputTypedTypography('label');
export const getListItemTypography = compose(
    getTypogaphyCSS,
    getTypographyVariant('listItem')
);
export const getBodyTypography = compose(
    getTypogaphyCSS,
    getTypographyVariant('body')
);
export const getHeadingTypography = compose(
    getTypogaphyCSS,
    getTypographyVariant('heading')
);
export const getButtonTypography = compose(
    getTypogaphyCSS,
    getTypographyVariant('button')
);
