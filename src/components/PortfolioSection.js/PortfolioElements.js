import styled from "styled-components";

export const PortfolioContainer = styled.div`
    background: #000815;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        height: 850px;
    }
`

export const CardContainer = styled.div`
    box-sizing: border-box;
    border: none;
    padding: 5px;
    height: 400px;
    width: 350px;
    font-size: small;
    border-radius: 10px;
    background: #fff;
    color: #000;
    z-index: 1;

    @media screen and (max-width: 768px) {
        margin-top: 10px;
        width: 240px;
        height: 320px;
    }
`

export const Img = styled.img`
    margin: 0;
    border-radius: 10px;
    border-bottom: 2px solid blue;
`