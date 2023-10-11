import styled from 'styled-components';

export const Root = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    justify-items: center;
    grid-template-rows: auto;
    gap: 42px;
    width: 100%;
    padding-bottom: 140px;
    @media (max-width: 990px) {
        gap: 20px;
        padding-bottom: 60px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
`;

export const Logo = styled.img`
    width: 156px;
    height: auto;
    @media (max-width: 990px) {
        width: 18%;
    }
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    grid-column: 1/3;
    grid-row: 1;
    gap: 10px;
    @media (max-width: 990px) {
        grid-column: 1;
        grid-row: 1;
    }
`;

export const Paragraph = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
    @media (max-width: 990px) {
        flex-direction: column;
        padding-bottom: 30px;
        gap: 20px;
    }
`;

export const FirstParagraph = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    // max-width: 622px;
`;

export const SecondParagraph = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    //max-width: 337px;
`;
