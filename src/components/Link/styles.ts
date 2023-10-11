import styled from 'styled-components';
import { IStyleLink } from './types';
import telegram from '../../assets/images/telegram.png';
import whatsapp from '../../assets/images/whatsapp.png';
import mail from '../../assets/images/mail.png';

const styleLink = {
    buttonLink: {
        border: 'solid #141414 2px',
        background: 'none',
        backgroundColor: 'none',
        backgroundSize: 'none',
        width: '240px',
        height: '50px',
        borderRadius: '46px',
    },
    telegramLink: {
        border: 'none',
        background: telegram,
        backgroundColor: 'none',
        backgroundSize: '100% 100%',
        width: '50px',
        height: '50px',
        borderRadius: 'none',
    },
    whatsappLink: {
        border: 'none',
        background: whatsapp,
        backgroundColor: 'none',
        backgroundSize: '100% 100%',
        width: '50px',
        height: '50px',
        borderRadius: 'none',
    },
    mailLink: {
        border: 'none',
        background: mail,
        backgroundColor: 'none',
        backgroundSize: '100% 100%',
        width: '50px',
        height: '50px',
        borderRadius: 'none',
    },
    base: {
        border: 'solid #141414 2px',
        background: 'none',
        backgroundColor: 'none',
        backgroundSize: '100% 100%',
        width: '240px',
        height: '50px',
        borderRadius: '46px',
    },
};

export const LinkStyle = styled.a<IStyleLink>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${({ variant }) => styleLink[variant || 'base'].width};
    height: ${({ variant }) => styleLink[variant || 'base'].height};
    border: ${({ variant }) => styleLink[variant || 'base'].border};
    background-image: url(${({ variant }) => styleLink[variant || 'base'].background});
    background-color: ${({ variant }) => styleLink[variant || 'base'].backgroundColor};
    background-size: ${({ variant }) => styleLink[variant || 'base'].backgroundSize};
    border-radius: ${({ variant }) => styleLink[variant || 'base'].borderRadius};
    background-repeat: no-repeat;
    background-position: center;
    text-decoration: none;
    cursor: pointer;
    color: #141414;
    font-weight: 700;
    font-size: 18px;
`;
