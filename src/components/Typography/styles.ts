import styled from 'styled-components';
import React from 'react';
import { IStyleTypography, ITypography } from './types';

const styleVariants = {
    bold: {
        fontWeight: '900',
    },
    medium: {
        fontWeight: '500',
    },
    regular: {
        fontWeight: '400',
    },
    base: {
        fontWeight: '400',
    },
};

const colorStyle = {
    red: {
        color: '#FF3754',
    },
    green: {
        color: '#0D9132',
    },
    black: {
        color: '#141414',
    },
    white: {
        color: '#ffffff',
    },
    base: {
        color: '#141414',
    },
};

const fontSizeStyles = {
    screen1280: {
        mainTitle: {
            fontSize: '134px',
            lineHeight: '125%',
        },
        title: {
            fontSize: '110px',
            lineHeight: '125%',
        },
        subTitle: {
            fontSize: '24px',
            lineHeight: '110%',
        },
        description: {
            fontSize: '18px',
            lineHeight: '140%',
        },
        smallDescription: {
            fontSize: '16px',
            lineHeight: '140%',
        },
        subtext: {
            fontSize: '14px',
            lineHeight: '125%',
        },
        base: {
            fontSize: '18px',
            lineHeight: '140%',
        },
    },
    screen1100: {
        mainTitle: {
            fontSize: '11vw',
            lineHeight: '125%',
        },
        title: {
            fontSize: '110px',
            lineHeight: '125%',
        },
        subTitle: {
            fontSize: '20px',
            lineHeight: '110%',
        },
        description: {
            fontSize: '18px',
            lineHeight: '140%',
        },
        smallDescription: {
            fontSize: '16px',
            lineHeight: '140%',
        },
        subtext: {
            fontSize: '14px',
            lineHeight: '125%',
        },
        base: {
            fontSize: '18px',
            lineHeight: '140%',
        },
    },
    screen768: {
        mainTitle: {
            fontSize: '11vw',
            lineHeight: '125%',
        },
        title: {
            fontSize: '110px',
            lineHeight: '125%',
        },
        subTitle: {
            fontSize: '20px',
            lineHeight: '110%',
        },
        description: {
            fontSize: '16px',
            lineHeight: '140%',
        },
        smallDescription: {
            fontSize: '16px',
            lineHeight: '140%',
        },
        subtext: {
            fontSize: '14px',
            lineHeight: '125%',
        },
        base: {
            fontSize: '18px',
            lineHeight: '140%',
        },
    },
    screen420: {
        mainTitle: {
            fontSize: '134px',
            lineHeight: '125%',
        },
        title: {
            fontSize: '110px',
            lineHeight: '125%',
        },
        subTitle: {
            fontSize: '24px',
            lineHeight: '110%',
        },
        description: {
            fontSize: '18px',
            lineHeight: '140%',
        },
        smallDescription: {
            fontSize: '16px',
            lineHeight: '140%',
        },
        subtext: {
            fontSize: '14px',
            lineHeight: '125%',
        },
        base: {
            fontSize: '18px',
            lineHeight: '140%',
        },
    },
};

export const StyleTypography = (Component: React.FC<ITypography>) => styled(Component)<IStyleTypography>`
    margin: 0;
    color: ${({ color }) => colorStyle[color || 'base'].color};
    text-decoration: ${({ textDecoration }) => textDecoration};
    text-align: ${({ textAlign }) => textAlign};
    font-weight: ${({ variant }) => styleVariants[variant || 'base'].fontWeight};
    font-size: ${({ sizeStyles }) => fontSizeStyles.screen1280[sizeStyles || 'base'].fontSize};
    line-height: ${({ sizeStyles }) => fontSizeStyles.screen1280[sizeStyles || 'base'].lineHeight};

    @media (max-width: 1100px) {
        font-size: ${({ sizeStyles }) => fontSizeStyles.screen1100[sizeStyles || 'base'].fontSize};
    }

    @media (max-width: 768px) {
        font-size: ${({ sizeStyles }) => fontSizeStyles.screen768[sizeStyles || 'base'].fontSize};
        font-weight: ${({ variant }) => styleVariants[variant || 'base'].fontWeight};
    }
`;
