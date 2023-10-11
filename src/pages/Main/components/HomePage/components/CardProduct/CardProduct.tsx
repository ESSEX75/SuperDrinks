import React from 'react';
import { ICardProduct } from './types';
import {
    Root,
    Title,
    ListOfBenefits,
    BenefitWrapper,
    Bullet,
    CardCover,
    CardWrapper,
    DescriptionWrapper,
    Arrow,
    ArrowWrapper,
    CardCoverVertical,
} from './styles';
import { Typography, Link } from '../../../../../../components';
import bullet from '../../../../../../assets/images/bullet.png';
import arrow from '../../../../../../assets/images/arrow.png';

const CardProduct: React.FC<ICardProduct> = ({ imageProduct, link, listOfBenefits, color }) => {
    return (
        <Root>
            <CardWrapper>
                <CardCover alt={imageProduct.alt} src={imageProduct.imageHorizontal} />
                <CardCoverVertical alt={imageProduct.alt} src={imageProduct.imageVertical} />
                <ArrowWrapper>
                    <Arrow src={arrow} />
                    <Typography
                        tag="p"
                        variant="bold"
                        sizeStyles="smallDescription"
                        textDecoration="none"
                        textAlign="left"
                        color="black"
                    >
                        Подробнее
                    </Typography>
                </ArrowWrapper>
                <DescriptionWrapper>
                    <Title color={color}>
                        <Typography
                            tag="h4"
                            variant="bold"
                            sizeStyles="smallDescription"
                            textDecoration="none"
                            textAlign="left"
                            color="white"
                        >
                            Для чего подходи
                        </Typography>
                    </Title>

                    <ListOfBenefits>
                        {listOfBenefits.map((benefit) => (
                            <BenefitWrapper key={benefit.id}>
                                <Bullet src={bullet} alt="Маркер списка"></Bullet>

                                <Typography
                                    tag="p"
                                    variant="regular"
                                    sizeStyles="smallDescription"
                                    textDecoration="none"
                                    textAlign="left"
                                    color="black"
                                >
                                    {benefit.listItem}
                                </Typography>
                            </BenefitWrapper>
                        ))}
                    </ListOfBenefits>

                    <Link variant="buttonLink" href={link}>
                        Подробнее
                    </Link>
                </DescriptionWrapper>
            </CardWrapper>
        </Root>
    );
};

export default CardProduct;
