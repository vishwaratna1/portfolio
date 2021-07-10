import React,{useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Vishwaratna</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" spy={true} smooth={true} duration={500}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills" spy={true} smooth={true} duration={500}>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" spy={true} smooth={true} duration={500}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
