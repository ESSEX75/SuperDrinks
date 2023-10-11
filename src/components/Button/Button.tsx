import React from 'react';
import { IButton } from './types';
import { ButtonStyle } from './styles';

const Button: React.FC<IButton> = ({ children, variant, onClick }) => {
    return (
        <ButtonStyle onClick={onClick} variant={variant}>
            {children}
        </ButtonStyle>
    );
};

export default Button;
