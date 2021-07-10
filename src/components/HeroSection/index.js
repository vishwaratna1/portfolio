import React from 'react'
import { Link } from 'react-scroll'
import Image from '../../images/vishwaratna.jpg'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, AnimatedText} from './HeroElements'

const HeroSection = () => {

    return (
        <HeroContainer>
            <HeroBg>
                {/* <VideoBg autoplay loop muted src={video} type='video/mp4' /> */}
                <ImageBg src={Image} type='image/jpg' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I'm Vishwaratna</HeroH1>
                <HeroP>
                    I'm a{' '}
                    <AnimatedText
                        loop={5}
                        wrapper="p"
                        steps={[
                            'Full Stack Developer',
                            1500,
                            'Web Designer',
                            1500,
                            'Programmer',
                            1000
                        ]}
                    />
                </HeroP>
                <Link to="portfolio" spy={true} smooth={true} duration={500} className="btn btn-primary text-white">See My Works <i className="fa fa-arrow-circle-down"></i></Link>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
