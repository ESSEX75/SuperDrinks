import styled from 'styled-components';

export const MainBackground = styled.div`
    background-color: #ffffff;
`;

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1538px;
    box-sizing: border-box;
    padding: 60px 80px;
    margin: 0 auto;
    font-family: 'ttInterfaces', sans-serif;

    @media (max-width: 1538px) {
        padding: 20px 40px;
    }
    @media (max-width: 534px) {
        padding: 10px;
    }
`;
