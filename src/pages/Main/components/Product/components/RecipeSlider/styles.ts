import styled from 'styled-components';
import { IAllItemsContainer, IWindow } from './types';

export const Root = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    gap: 10px;
`;
export const Window = styled.div<IWindow>`
    width: ${({ width }) => width}px;
    height: auto;
    overflow: hidden;
`;
export const AllItemsContainer = styled.div<IAllItemsContainer>`
    transform: translateX(${({ transform }) => transform}px);
    transition: translate;
    transition-property: transform;
    transition-duration: ${({ duration }) => duration}ms;
    transition-timing-function: ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`;
