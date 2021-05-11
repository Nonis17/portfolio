import { TextContainer, PictureContainer, Title, InfoBox, Picture } from "./Styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import { Spring, animated } from 'react-spring/renderprops';

const github = <FontAwesomeIcon icon={faGithub} />

const PortfolioProject = () => {

    //Setting image size
    const [selectedIndex, setSelectedIndex] = useState(0);

    //Changes the image size onClick
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
                        <Title>Portfolio</Title>
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
                                <h3>First React project</h3>
                                <p>This is the result of a school project to learn a new JavaScript library, React.</p>
                              
                                <button>  <a href="https://emma-lilja.surge.sh">Website</a></button>
                              <button> <a href="https://github.com/Nonis17/portfolio">
                                    <span>{github}</span>Github</a></button> 
                            </InfoBox>
                        </TextContainer>
                        <PictureContainer>
                            <Picture
                                src="/images/portfolio.png"
                                alt="upcomingproject"
                                onClick={() => handleOnClick("1")}
                                isSelectedIndex={selectedIndex === "1"} />

                        </PictureContainer>
                    </animated.div>
                )}
            </Spring>
        </>
    );
}

export default PortfolioProject;