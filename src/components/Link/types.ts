export interface ILink {
    variant: 'buttonLink' | 'telegramLink' | 'whatsappLink' | 'mailLink';
    children?: string;
    href: string;
}

export interface IStyleLink {
    variant: 'buttonLink' | 'telegramLink' | 'whatsappLink' | 'mailLink';
}
