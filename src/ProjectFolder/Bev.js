import { TextContainer, PictureContainer, Title, InfoBox, Picture } from "./Styles";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Spring, animated } from 'react-spring/renderprops';

const github = <FontAwesomeIcon icon={faGithub} />

const ClimbProject = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);


    function handleOnClick(id) {
        if (selectedIndex === id) {
            setSelectedIndex(0);
        } else {
            setSelectedIndex(id);
        }
    }

    return (
        <>
            <Spring
                from={{ opacity: 0, marginRight: -500 }}
                to={{ opacity: 1, marginRight: 0 }}
                config={{ delay: 50, duration: 400 }}>

                {props => (
                    <animated.div style={props}>
                        <Title>BEV</Title>
                    </animated.div>
                )}
            </Spring>


            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 700, duration: 800 }}
            >
                {props => (
                    <animated.div style={props}>
                        <TextContainer>
                            <InfoBox>
                                <h3>A school project </h3>
                                <h3>Data heavy webpage with firebase database</h3>
                                <p>The requirement was that it should be a website with one or more API:s and Firebase. This project is built with React, and we worked with the agile and SCRUM methods. </p>
                                <p>[This project is under construction]</p>
                  <button><a href="http://fe20tp2-bev-grupp4.surge.sh/"> Website </a> </button>
                  <button>  <a href="https://github.com/FaaDiiL/fe20tp2_bev_4">
                <span>{github}</span> Github</a></button>
                            </InfoBox>
                        </TextContainer>
                        <PictureContainer>
                            <div>
                                <Picture
                                    src="/images/bev.png"
                                    onClick={() => handleOnClick("1")}
                                    isSelectedIndex={selectedIndex === "1"}
                                    alt="bevproject" />
                            </div>
                        
                        </PictureContainer>
                    </animated.div>
                )}
            </Spring>
        </>
    );
}

export default ClimbProject;