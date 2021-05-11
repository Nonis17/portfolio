import React, { useState } from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import { TextContainer, PictureContainer, Title, InfoBox, Picture } from "./Styles";


const Ux = () => {

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
                        <Title>UX</Title>
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
                                <h3>EU Bike</h3>
                                <p>This is the result of a UX course in school, where we had to make a new prototype app for an existing company. To come up with solutions to meet both company goals and user needs, I used several approaches, including user research, interviews, impact mapping, looking for pain points, user testings and prototyping. The prototype was buildt in Figma. </p>
                                <button>  <a href="https://eubike.se/">
                EU Bikes own website</a></button>
                                
                    
                               <button> <a href="https://www.figma.com/proto/gcYdbsPDlDNC5ljcx1kTNp/EU-Bike?node-id=4%3A3&scaling=min-zoom">
                                    Figma Prototype</a></button>
                            </InfoBox>
                        </TextContainer>
                        <PictureContainer>
                            <Picture
                                src="/images/eubike.png"
                                alt="eubike"
                                onClick={() => handleOnClick("1")}
                                isSelectedIndex={selectedIndex === "1"} />

                        </PictureContainer>
                    </animated.div>
                )}
            </Spring>
        </>
    );
}

export default Ux;

