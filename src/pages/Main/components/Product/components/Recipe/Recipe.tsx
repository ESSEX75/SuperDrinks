import React from 'react';
import { IRecipeComponent } from './types';
import { Root, TitleWrapper, ParagraphWrapper, RecipeCover } from './styles';
import { Typography } from '../../../../../../components';

const Recipe: React.FC<IRecipeComponent> = ({ recipe }) => {
    const { image, title, description, gram, alt } = recipe;

    return (
        <Root>
            <RecipeCover alt={alt} src={image} />
            <TitleWrapper>
                <Typography
                    tag="h4"
                    variant="bold"
                    sizeStyles="description"
                    textDecoration="none"
                    textAlign="left"
                    color="black"
                >
                    {title}
                </Typography>
                <ParagraphWrapper>
                    <Typography
                        tag="p"
                        variant="regular"
                        sizeStyles="description"
                        textDecoration="none"
                        textAlign="left"
                        color="black"
                    >
                        {gram}
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
                </ParagraphWrapper>
            </TitleWrapper>
        </Root>
    );
};

export default Recipe;
