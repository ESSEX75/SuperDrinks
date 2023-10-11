export interface IButton {
    variant: 'leftArrow' | 'rightArrow';
    children?: string;
    onClick?: () => void;
}

export interface IButtonStyle {
    variant: 'leftArrow' | 'rightArrow';
}
