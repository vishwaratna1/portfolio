import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

export const SkillContainer = styled.div`
    background:#fff;
    display: flex;
    color: #000;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;

    /* @media screen and (max-width: 768px){
        transform: scale(0.8);
    } */

`

export const HeartIcon = styled(FaHeart)`
    color: #ff0808;
    animation: pulse 1s alternate infinite;


    @keyframes pulse{
        0% {
            transform: scale(1);
        }

        100%{
            transform: scale(1.1);
        }
    }
`

