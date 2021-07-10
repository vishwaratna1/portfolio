import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" spy={true} smooth={true} duration={500} onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="skills" spy={true} smooth={true} duration={500} onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to="portfolio" spy={true} smooth={true} duration={500} onClick={toggle}>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to="contact" spy={true} smooth={true} duration={500} onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>

                <p className="text-center m-auto"><i className="fa fa-pencil text-primary"></i> Handcrafted By <span className=" text-primary">Vishwaratna</span> </p>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
