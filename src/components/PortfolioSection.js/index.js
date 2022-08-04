import React from 'react'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'
import { PortfolioContainer, CardContainer, Img, OptBr, OptBr2 } from './PortfolioElements'

const PortfolioSection = () => {
    return (
        <>
            <PortfolioContainer id="portfolio">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center text-primary m-auto"><strong>Portfolio</strong></h2>

                    </div>
                    
                    <div className="row mt-3">
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <CardContainer>
                                <Img src={project1} className="img-thumbnail img-fluid" type="image/png" />
                                <div className="text-center">
                                    <h6 className="text-center mt-2"><strong>Resume Builder</strong></h6>
                                    <OptBr />
                                    <p>An easy Web Application for building resume.  </p>
                                    <OptBr2 />
                                    <a href="https://resumebuilder-vishwaratna.vercel.app/" target="_blank" rel="noopener noreferrer"  className="btn btn-primary">
                                        <i className="fa fa-cog fa-spin"></i>Under Construction
                                    </a>
                                </div>

                            </CardContainer>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <CardContainer>
                                <Img src={project3} className="img-thumbnail img-fluid" type="image/png" alt="" />
                                <div className="text-center">
                                    <h6 className="text-center mt-2"><strong>Live Editor</strong></h6>
                                    <OptBr />
                                    <p>A Live Code Editor for viewing realtime code results.</p>
                                    <OptBr2 />
                                    <a href="https://live-editor.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Know More</a>
                                </div>

                            </CardContainer>

                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <CardContainer>
                                <Img src={project2} className="img-thumbnail img-fluid" type="image/png" alt="" />
                                <div className="text-center">
                                    <h6 className="text-center mt-2"><strong>Odisha CHSE Marks Calculator</strong></h6>
                                    <p>A calcuator for the students of Odisha to predict their marks.</p>
                                    {/* <a href="https://www.adityapanda.codes/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" disabled>Know More</a> */}
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-disabled">Know More</a>
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
