import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from './HeroSection'
import SkillSection from './SkillSection'
import AboutSection from './AboutSection'
import PortfolioSection from './PortfolioSection.js'
import ContactSection from './ContactSection'
import FooterSection from './Footer'

const Main = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <PortfolioSection />
            <ContactSection />
            <FooterSection />
        </>
    )

}
export default Main
