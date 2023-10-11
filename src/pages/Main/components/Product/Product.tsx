import React from 'react';
import {
    Root,
    ProductWrapper,
    Label,
    TitleWrapper,
    AdvantagesWrapper,
    AdvantagesList,
    Bullet,
    Advantage,
    RecipesWrapper,
} from './styles';
import { Typography } from '../../../../components';
import { IProduct } from './types';
import bullet from '../../../../assets/images/bullet.png';
import { Recipe, RecipeSlider } from './components';

const Product: React.FC<IProduct> = ({ productList }) => {
    const { title, description, advantages, recipes } = productList;
    return (
        <Root>
            <ProductWrapper>
                <TitleWrapper>
                    <Typography
                        tag="h2"
                        variant="bold"
                        sizeStyles="title"
                        textDecoration="none"
                        textAlign="left"
                        color="red"
                    >
                        {title}
                    </Typography>
                    <Typography
                        tag="p"
                        variant="regular"
                        sizeStyles="description"
                        textDecoration="none"
                        textAlign="left"
                        color="black"
                    >
                        {description}
                    </Typography>
                </TitleWrapper>
                <AdvantagesWrapper>
                    <Typography
                        tag="h4"
                        variant="bold"
                        sizeStyles="description"
                        textDecoration="none"
                        textAlign="left"
                        color="black"
                    >
                        Конкурентные преимущества:
                    </Typography>
                    <AdvantagesList>
                        {advantages.map((advantage) => (
                            <Advantage key={parseInt(advantage, 10)}>
                                <Bullet src={bullet} />
                                <Typography
                                    tag="p"
                                    variant="regular"
                                    sizeStyles="description"
                                    textDecoration="none"
                                    textAlign="left"
                                    color="black"
                                >
                                    {advantage}
                                </Typography>
                            </Advantage>
                        ))}
                    </AdvantagesList>
                </AdvantagesWrapper>
                <RecipesWrapper>
                    <Typography
                        tag="h3"
                        variant="bold"
                        sizeStyles="subTitle"
                        textDecoration="none"
                        textAlign="left"
                        color="black"
                    >
                        Рецепты с Super Juice
                    </Typography>
                    <RecipeSlider>
                        {recipes.map((recipe) => (
                            <Recipe key={recipe.id} recipe={recipe} />
                        ))}
                    </RecipeSlider>
                </RecipesWrapper>
            </ProductWrapper>
            <Label />
        </Root>
    );
};

export default Product;
