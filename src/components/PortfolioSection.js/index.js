import React from 'react'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import { PortfolioContainer, CardContainer, Img } from './PortfolioElements'

const PortfolioSection = () => {
    return (
        <>
            <PortfolioContainer id="portfolio">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center text-primary m-auto"><strong>Portfolio</strong></h2>

                    </div>
                    
                    <div className="row mt-3">
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <CardContainer>
                                <Img src={project1} className="img-thumbnail img-fluid" type="image/png" />
                                <div className="text-center">
                                    <h6 className="text-center mt-2"><strong>Resume Builder</strong></h6>
                                    <br />
                                    <p>An easy Web Application for building awesome resume.  </p>
                                    <a href="/" target="_blank" rel="noopener noreferrer"  className="btn btn-primary disabled"><i className="fa fa-cog fa-spin fa-lg text-dark"></i> Under Construction</a>
                                </div>

                            </CardContainer>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <CardContainer>
                                <Img src={project2} className="img-thumbnail img-fluid" type="image/png" alt="" />
                                <div className="text-center">
                                    <h6 className="text-center mt-2"><strong>Odisha CHSE Marks Calculator</strong></h6>
                                    <p>A calcuator for the students of Odisha to predict their marks.</p>
                                    <a href="https://www.adityapanda.codes/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Know More</a>
                                </div>

                            </CardContainer>

                        </div>

                    </div>
                </div>
            </PortfolioContainer>
        </>
    )
}

export default PortfolioSection
