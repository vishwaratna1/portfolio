import React from 'react';
import codeImage from '../../images/code.svg';
import { SkillContainer, HeartIcon} from './SkillElement';

const SkillSection = () => {
    return (
        <>
            <SkillContainer id="skills">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 col-md-6 mt-5">
                            <h2 className="text-primary"><strong>Skills</strong></h2>
                            <h1 className="display-5">I <HeartIcon /> Coding</h1>
                            <img className="skillImage" src="https://img.icons8.com/color/96/000000/html-5.png" alt=""/>
                            <img className="skillImage" src="https://img.icons8.com/color/96/000000/css3.png" alt=""/>
                            <img className="skillImage" src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt=""/>
                            <img className="skillImage" src="https://img.icons8.com/color/96/000000/react-native.png" alt=""/>
                            <img className="skillImage" src="https://img.icons8.com/color/96/000000/python--v2.png" alt=""/>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <img src={codeImage} className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>

            </SkillContainer>

        </>
    )
}

export default SkillSection
