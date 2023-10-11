import React from 'react';

export interface ITypography {
    tag: string;
    children: string | React.ReactNode;
    className?: string;
    textDecoration: string;
    textAlign: string;
    color: 'red' | 'green' | 'black' | 'white';
    variant: 'bold' | 'medium' | 'regular';
    sizeStyles: 'mainTitle' | 'title' | 'subTitle' | 'description' | 'smallDescription' | 'subtext';
}

export interface IStyleTypography {
    className?: string;
    textDecoration: string;
    textAlign: string;
    color: 'red' | 'green' | 'black' | 'white';
    variant: 'bold' | 'medium' | 'regular';
    sizeStyles: 'mainTitle' | 'title' | 'subTitle' | 'description' | 'smallDescription' | 'subtext';
}
