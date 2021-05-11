import { TextContainer, PictureContainer, Title, InfoBox, Picture } from "./Styles";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Spring, animated } from 'react-spring/renderprops';

const github = <FontAwesomeIcon icon={faGithub} />



const CoffeeShopComponent = () => {
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
                        <Title>Coffee Shop</Title>
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
                                <h3>Vanilla JavaScript</h3>
                                <p>
                                    I did this project in my spare time to immerse myself in vanilla JavaScript</p>
                                    <p>[Under development]</p>
                                    <button>  <a href="https://sunshinecoffeeshop.surge.sh">
                 Website</a></button>
                                    <button>  <a href="https://github.com/Nonis17/CoffeeShop">
                <span>{github}</span> Github</a></button>
                           
                            </InfoBox>
                        </TextContainer>
                        <PictureContainer>
                            <Picture
                                src="/images/CoffeeOne.png"
                                alt="Coffeeproject"
                                onClick={() => handleOnClick("1")}
                                isSelectedIndex={selectedIndex === "1"} />
                            <Picture
                                src="/images/CoffeeTwo.png"
                                alt="Coffeeproject"
                                onClick={() => handleOnClick("2")}
                                isSelectedIndex={selectedIndex === "2"} />
                            <Picture
                                src="/images/CoffeeThree.png"
                                alt="Coffeeproject"
                                onClick={() => handleOnClick("3")}
                                isSelectedIndex={selectedIndex === "3"} />
                            <Picture
                                src="/images/CoffeeFour.png"
                                alt="Coffeeproject"
                                onClick={() => handleOnClick("4")}
                                isSelectedIndex={selectedIndex === "4"} />
                            <Picture
                                src="/images/CoffeeFive.png"
                                alt="Coffeeproject"
                                onClick={() => handleOnClick("5")}
                                isSelectedIndex={selectedIndex === "5"} />
                            <Picture
                                src="/images/CoffeeSix.png"
                                alt="Coffeeproject"
                                onClick={() => handleOnClick("6")}
                                isSelectedIndex={selectedIndex === "6"} />
                        </PictureContainer>
                    </animated.div>
                )}
            </Spring>
        </>
    );
}

export default CoffeeShopComponent;

