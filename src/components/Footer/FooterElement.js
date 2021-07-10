import styled from "styled-components";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    background: #000815;
    color: #fff;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 120px;
    position: relative;
    z-index: 1;
`

export const CopyrightContainer = styled.p`
    padding-bottom: 5px;
`

export const SiteLink = styled(Link)`
    text-decoration: none;
    color: #fff;

    &:hover {
        text-decoration: none;
        color: #fff;
    }
`

export const PenIcon = styled(FaPen)`
    color: #0066ff;
`