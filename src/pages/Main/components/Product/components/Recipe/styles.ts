import styled from 'styled-components';

export const Root = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    max-width: 100%;
    height: auto;
    background-color: #efefef;
    border-radius: 40px;
    padding: 25px;
    box-sizing: border-box;
    gap: 30px;
    cursor: pointer;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`;

export const ParagraphWrapper = styled(TitleWrapper)`
    gap: 5px;
`;

export const RecipeCover = styled.img`
    width: 116px;
    height: 116px;
`;
