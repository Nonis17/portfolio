
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import { TextContainer, PictureContainer, Title, InfoBox, Picture } from "./Styles";

const github = <FontAwesomeIcon icon={faGithub} />

const TextEditor = () => {
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
                        <Title>Text Editor</Title>
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
                                <h3>A group project in working methodology </h3>
                                <p>In this school project, the goal was to teach us different working methods, and we chose agile and SCRUM. We implemented an external text editor library to the webpage, and made it into a simple to use, online, text editor. This was done with vanilla JavaScript.</p>
                       
                                <button>  <a href="http://vellum.surge.sh/">
                Website</a></button>  
                                <button>  <a href="https://github.com/Voltair88/fe20tp1_-Vellum-">
                <span>{github}</span> Github</a></button>
                            </InfoBox>
                        </TextContainer>
                        <PictureContainer>
                            <Picture
                                src="/images/editorOne.png"
                                alt="Texteditor"
                                onClick={() => handleOnClick("1")}
                                isSelectedIndex={selectedIndex === "1"} />
                            <Picture
                                src="/images/EditorThree.png"
                                alt="Texteditor"
                                onClick={() => handleOnClick("2")}
                                isSelectedIndex={selectedIndex === "2"} />
                            <Picture
                                src="/images/EditorFour.png"
                                alt="Texteditor"
                                onClick={() => handleOnClick("3")}
                                isSelectedIndex={selectedIndex === "3"} />
                            <Picture
                                src="/images/EditorFive.png"
                                alt="Texteditor"
                                onClick={() => handleOnClick("4")}
                                isSelectedIndex={selectedIndex === "4"} />

                        </PictureContainer>
                    </animated.div>
                )}
            </Spring>
        </>
    );
}

export default TextEditor;