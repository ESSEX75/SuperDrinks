import React, { Children, cloneElement, useEffect, useState } from 'react';
import { IRecipeSlider } from './types';
import { Root, Window, AllItemsContainer } from './styles';
import { Button } from '../../../../../../components';

const TRANSITION_DURATION = 300;

const RecipeSlider: React.FC<IRecipeSlider> = ({ children }) => {
    const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(600);
    const [pages, setPages] = useState([...children]);
    const [cloneCount, setCloneCount] = useState({ head: 1, tail: 1 });
    const [transitionDuration, setTransitionDuration] = useState(TRANSITION_DURATION);

    useEffect(() => {
        if (children) {
            setPages([cloneElement(children[Children.count(children) - 1]), ...children, cloneElement(children[0])]);
            setCloneCount({ head: 1, tail: 1 });
        }
    }, [children]);

    useEffect(() => {
        setOffset(-(cloneCount.head * width + 20));
    }, [cloneCount.head, width]);

    useEffect(() => {
        if (offset == 0) {
            setTimeout(() => {
                setOffset(-((width + 20) * (pages.length - (cloneCount.head + cloneCount.tail))));
                setTransitionDuration(0);
            }, TRANSITION_DURATION);
        }
        if (offset == -((width + 20) * (pages.length - cloneCount.head))) {
            setTimeout(() => {
                setOffset(-(cloneCount.head * (width + 20)));
                setTransitionDuration(0);
            }, TRANSITION_DURATION);
        }
    }, [offset, width, pages, cloneCount.head, cloneCount.tail]);

    useEffect(() => {
        if (transitionDuration == 0) {
            setTimeout(() => {
                setTransitionDuration(TRANSITION_DURATION);
            }, TRANSITION_DURATION);
        }
    }, [transitionDuration]);

    return (
        <Root>
            <Button variant="leftArrow" onClick={() => setOffset((prevState) => prevState + (width + 20))} />
            <Window width={width}>
                <AllItemsContainer transform={offset} duration={transitionDuration}>
                    {pages}
                </AllItemsContainer>
            </Window>
            <Button variant="rightArrow" onClick={() => setOffset((prevState) => prevState - (width + 20))} />
        </Root>
    );
};

export default RecipeSlider;
