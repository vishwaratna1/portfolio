import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer, CopyrightContainer, SiteLink } from './FooterElement'

const FooterSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <div className="container">
                    <CopyrightContainer>
                        Copyright &copy; 2021 | <SiteLink to="/" onClick={toggleHome}>Vishwaratna</SiteLink>
                    </CopyrightContainer>
                </div>
            </FooterContainer>
        </>
    )
}

export default FooterSection
