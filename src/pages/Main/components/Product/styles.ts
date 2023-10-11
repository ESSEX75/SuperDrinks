import styled from 'styled-components';

export const Root = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding-bottom: 30px;
`;

export const AdvantagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
`;

export const AdvantagesList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    max-width: 646px;
    padding-bottom: 25px;
    column-gap: 30px;
`;

export const Advantage = styled.li`
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

export const Label = styled.div`
    background-color: grey;
    width: 630px;
    height: 700px;
`;
export const RecipesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
`;
