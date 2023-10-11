import React from 'react';
import { Typography } from '../../../../components';
import { Root, Logo, TitleWrapper, DescriptionWrapper, FirstParagraph, SecondParagraph, Paragraph } from './styles';
import { CardProduct, Cooperation } from './components';
import logo from '../../../../assets/images/logo.png';
import superJuiceCover from '../../../../assets/images/superJuiceCover.jpg';
import superBaseCover from '../../../../assets/images/superBaseCover.jpg';
import verticalSJ from '../../../../assets/images/SJVertical.png';
import verticalSB from '../../../../assets/images/SBVertical.png';
import { IList, IImageProduct } from './types';

const superJuiceList: IList[] = [
    { id: 1, listItem: 'Подходит для лимонадов' },
    { id: 2, listItem: 'Для приготовления коктейлей' },
    { id: 3, listItem: 'Для безалкогольных напитков' },
    { id: 4, listItem: 'Для приготовления коктейлей' },
    { id: 5, listItem: 'Хорошая добавка в кордиалов' },
];

const superJuice: IImageProduct = {
    imageHorizontal: superJuiceCover,
    imageVertical: verticalSJ,
    alt: 'Бутылка super juice',
};

const superBase: IImageProduct = {
    imageHorizontal: superBaseCover,
    imageVertical: verticalSB,
    alt: 'Бутылка super base',
};

const HomePage = () => {
    return (
        <Root>
            <DescriptionWrapper>
                <TitleWrapper>
                    <Typography
                        tag="h1"
                        variant="bold"
                        sizeStyles="mainTitle"
                        textDecoration="none"
                        textAlign="left"
                        color="black"
                    >
                        Super.Drinks
                    </Typography>
                    <Logo src={logo} />
                </TitleWrapper>
                <Paragraph>
                    <FirstParagraph>
                        <Typography
                            tag="span"
                            variant="bold"
                            sizeStyles="description"
                            textDecoration="none"
                            textAlign="left"
                            color="black"
                        >
                            Компания основанная экспертами барной индустрии
                        </Typography>
                        <Typography
                            tag="p"
                            variant="regular"
                            sizeStyles="description"
                            textDecoration="none"
                            textAlign="left"
                            color="black"
                        >
                            Мы всегда на шаг впереди и являемся надежным партнером для бизнеса в секторе HoReCa.
                            Огромный опыт профессиональной команды позволяет нам использовать совершенно новый подход
                            для производства напитков
                        </Typography>
                    </FirstParagraph>
                    <SecondParagraph>
                        <Typography
                            tag="span"
                            variant="bold"
                            sizeStyles="description"
                            textDecoration="none"
                            textAlign="left"
                            color="black"
                        >
                            Эксклюзивный ассортимент
                        </Typography>
                        <Typography
                            tag="p"
                            variant="regular"
                            sizeStyles="description"
                            textDecoration="none"
                            textAlign="left"
                            color="black"
                        >
                            Уникальные вкусы, исключительно натуральные ингредиенты, главное отличие наших брендов
                        </Typography>
                    </SecondParagraph>
                </Paragraph>
            </DescriptionWrapper>
            <Cooperation />
            <CardProduct color="#FF3754" imageProduct={superJuice} listOfBenefits={superJuiceList} link="#" />
            <CardProduct color="#0C9231" imageProduct={superBase} listOfBenefits={superJuiceList} link="#" />
        </Root>
    );
};

export default HomePage;
