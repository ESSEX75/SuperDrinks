import styled from 'styled-components';

export const Root = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #efefef;
    box-sizing: border-box;
    border-radius: 40px;
    padding: 35px;
    width: 306px;
    height: 670px;
    grid-column: 3;
    grid-row: 1/3;
    align-self: flex-end;
    @media (max-width: 1420px) {
        height: auto;
        width: 100%;
        padding: 50px;
        grid-column: 1/3;
        grid-row: 3;
    }
    @media (max-width: 990px) {
        grid-column: 1;
        grid-row: 4;
    }
    @media (max-width: 740px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px;
    }
`;

export const VerticalBlockTemplate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const TitleWrapper = styled(VerticalBlockTemplate)`
    gap: 14px;
`;

export const PhoneWrapper = styled(VerticalBlockTemplate)`
    gap: 16px;
`;

export const InformationWrapper = styled(VerticalBlockTemplate)`
    gap: 44px;
    padding-bottom: 15px;

    @media (max-width: 1420px) {
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        padding-bottom: 30px;
    }
    @media (max-width: 740px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 60%;
        gap: 24px;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 18px;
`;

export const MapWrapper = styled.div`
    width: 100%;
    height: 260px;
    @media (max-width: 990px) {
        display: none;
    }
`;

export const AddressWrapper = styled.div`
    max-width: 220px;
`;
