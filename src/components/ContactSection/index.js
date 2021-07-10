import React from 'react'
import Image from '../../images/contact.svg'
import { ContactContainer} from './ContactElements'

const ContactSection = () => {
    return (
        <>
            <ContactContainer id="contact">
                <div className="container">

                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h2 className="text-center text-primary"><strong>Contact</strong></h2>

                            <br />
                            <div className="row">
                                <p><i className="fa fa-phone fa-lg"></i> <a className="contactLink" href="tel:911-337-4436" rel="noopener noreferrer">+ 91 911 376 4436</a></p>
                            </div>
                            <div className="row">
                                <p><i className="fa fa-lg fa-whatsapp"></i> <a className="contactLink" href="https://wa.me/919113764436" target="_blank" rel="noopener noreferrer">+ 91 911 376 4436</a></p>
                            </div>
                            <div className="row">
                                <p><i className="fa fa-envelope fa-lg"></i> <a className="contactLink" href="mailto:vishwaratna555@gmail.com" target="_blank" rel="noopener noreferrer">vishwaratna555@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 d-flex justify-content-center">
                            <img src={Image} className="img-fluid" alt="" />
                        </div>

                    </div>
                </div>
            </ContactContainer>
        </>
    )
}

export default ContactSection
