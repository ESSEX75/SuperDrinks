import styled from 'styled-components';
import { ITitle } from './types';
export const Root = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #efefef;
    border-radius: 40px;
    box-sizing: border-box;
    width: 100%;
    height: 390px;
    padding: 30px;
    overflow: hidden;
    @media (max-width: 990px) {
        grid-column: 1;
        height: auto;
        padding: 50px 30px;
    }
    @media (max-width: 534px) {
        padding: 20px;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 990px) {
        gap: 30px;
    }
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 2em;
    @media (max-width: 990px) {
        display: none;
    }
`;

export const Title = styled.div<ITitle>`
    background-color: ${({ color }) => color || '#fffff'};
    background-size: cover;
    border-radius: 1000px;
    padding: 6px 15px;
`;

export const ListOfBenefits = styled.ul`
    padding-top: 15px;
    padding-bottom: 25px;
`;

export const BenefitWrapper = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 6px;
`;

export const Bullet = styled.img`
    width: 6px;
    height: 6px;
    padding-bottom: 4px;
    padding-right: 7px;
`;

export const CardCover = styled.img`
    width: 200px;
    height: 354px;
    @media (max-width: 990px) {
        display: none;
    }
`;

export const CardCoverVertical = styled.img`
    display: none;
    @media (max-width: 990px) {
        display: block;
        width: 74%;
        height: auto;
    }
    @media (max-width: 534px) {
        width: 65%;
    }
`;

export const Arrow = styled.img`
    width: 80%;
    height: auto;
    @media (max-width: 534px) {
        width: 60%;
    }
`;

export const ArrowWrapper = styled.div`
    display: none;
    @media (max-width: 990px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    @media (max-width: 534px) {
        gap: 10px;
    }
`;
