import React from 'react';
import { ILink } from './types';
import { LinkStyle } from './styles';

const Link: React.FC<ILink> = ({ children, variant, href }) => {
    return (
        <LinkStyle href={href} variant={variant}>
            {children}
        </LinkStyle>
    );
};

export default Link;
