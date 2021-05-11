import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops'; 
import {animated } from 'react-spring';



const AboutContainer = styled.div`
 display: flex;
 justify-content: center; 
align-items: center; 
margin: 0 auto;
color: white;
flex-direction: column;
margin-top:100px;
margin-bottom: 100px;
background-image: linear-gradient(#c36e3cc5, #92471cdc);  
height: 700px;
padding: 15px; 


@media (width: 768px) {
  height: 600px;
  margin-bottom: 100px;
}

@media (max-width: 600px) {
  margin-top: 50px; 
  height: 450px;
  margin-bottom: 80px;
} 
`;


const AboutTitle = styled.h2`
font-size: 40px;
letter-spacing: 3px;
color: #f1ede8;
margin: 0 auto;

@media (max-width: 600px) {
  font-size: 20px;
}
`;

const TextCont = styled.div`
display: flex;
flex-direction: row;  
justify-content: space-evenly;
align-items: center;
width: 50%;
margin: 0 auto;

@media (max-width: 600px) {
  width: 80%;
}
`;

const Text = styled.p`
font-size: 16px;
letter-spacing: 2px;
color: #f1ede8;
margin-top: 20px;

@media (max-width: 600px) {
  font-size: 12px;
}
`;

const Image = styled.img`
height: 350px;
width: 380px;
border-radius: 36px;
align-self: center;
margin-bottom: 30px;
margin-top: 30px;

@media (max-width: 600px) {
  height: 250px;
  width: 280px;
}
`;

function Home() {

  return (

    <AboutContainer>
      <AboutTitle>Hi! I'm </AboutTitle>
      <Spring
                from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ delay: 50, duration: 450, friction: 500 }}>
                {props => (
                    <animated.div style={props}> 
      <Image src="/images/emm.png" alt="Emma" />
    </animated.div>
                )}
            </Spring> 

            <AboutTitle>Emma Lilja</AboutTitle>
     

<TextCont>
<Spring
                from={{ opacity: 0, marginBottom: 0 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 600, duration: 800, }}>
                {props => (
                    <animated.div style={props}> 
                 
  <Text>a Front End Developer student</Text>
    </animated.div>
                )}
            </Spring> 
</TextCont>

    </AboutContainer>

  );
}

export default Home;