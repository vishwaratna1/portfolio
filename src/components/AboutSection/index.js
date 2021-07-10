import React from 'react'
import { AboutContainer } from './AboutElements'
import Image from '../../images/about.svg'

const AboutSection = () => {
    return (
        <>
            <AboutContainer id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-last">
                            <h2 className="text-center text-primary"><strong>About</strong></h2>

                            <h5>Hi, I'm Vishwaratna. I'am a Full Stack Developer.</h5>
                            <p style={{ textTransform: 'capitalize' }}>I love to design and develop awesome websites. I have done some wonderful projects based on my skills.</p>
                            <p style={{ textTransform: 'capitalize' }}>I also like to capture some wonderful moments in the camera. I like to learn new things which I find intresting.</p>

                            <h5 className="mt-2 mb-3" >Languages I Speak: Hindi, English </h5>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="vishwaratna" data-version="v1">
                                <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/vishwaratna?trk=profile-badge">Vishwa Ratna</a>
                            </div> */}

                            <img src={Image} className="img-fluid" alt="" />
                        </div>

                    </div>
                </div>
            </AboutContainer>
        </>
    )
}

export default AboutSection
