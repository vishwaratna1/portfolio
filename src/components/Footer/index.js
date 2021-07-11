import React from 'react'
import { SocialIcon } from 'react-social-icons'
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
                    <div className="row">
                        <CopyrightContainer className="m-auto">
                            Copyright &copy; 2021 | <SiteLink to="/" onClick={toggleHome}>Vishwaratna</SiteLink>
                        </CopyrightContainer>
                    </div>
                    <div className="row">
                        <div className="m-auto">
                            <SocialIcon url="https://www.github.com/vishwaratna1" target="_blank" style={{ height: 35, width: 35 }} className="mr-2" bgColor="#fff"></SocialIcon>
                            <SocialIcon url="https://www.linkedin.com/in/vishwaratna/" target="_blank" style={{ height: 35, width: 35 }} className="mr-2" bgColor="#fff"></SocialIcon>
                            <SocialIcon url="https://www.facebook.com/vishwaratna01" target="_blank" style={{ height: 35, width: 35 }} className="mr-2" bgColor="#fff"></SocialIcon>
                            <SocialIcon url="https://www.instagram.com/vishwa.ratna" target="_blank" style={{ height: 35, width: 35 }} bgColor="#fff"></SocialIcon>
                        </div>
                    </div>
                </div>
            </FooterContainer>
        </>
    )
}

export default FooterSection
