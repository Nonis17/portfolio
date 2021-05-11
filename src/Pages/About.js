import styled from 'styled-components';
import WeatherWithHooks from '../API/WeatherHook';
import { Spring, animated } from 'react-spring/renderprops';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im'
import { IconContext } from 'react-icons/lib';

const Container = styled.div`
display: flex; 
align-items: center;
justify-content: space-evenly;
flex-direction: column;
flex-wrap: wrap;

`;

const Background = styled.div`
background-image: linear-gradient(#c36e3cc5, #92471cdc);  
width: 100%;
`;

const Title = styled.h1`
font-size: 40px;
color: #C36D3C; 
text-align: center;
margin: 50px;

`;

const InfoBox = styled.div`
margin-bottom: 30px;
width: 50%; 
text-align: center;
margin: 0 auto;
padding: 10px 50px 10px 50px;
border-radius: 6px;

@media (max-width: 768px) {
    width: 60%;
  }

p{
    color: white;
    line-height: 1.7;
    font-size: 18px;
    margin: 10px;
}
`;

const FlexCont = styled.div`
margin-top: 200px;
margin-bottom: 200px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 80%;
flex-wrap: wrap;

@media (max-width: 414px) {
    margin-top: 100px;
    margin-bottom: 100px;

  }

  @media (max-width: 1024px){
    flex-direction: column;
  }

`;

const Section = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 25px;
flex-wrap: wrap;
align-items: center;

div { 
   
    background-color: #92471cdc;
    border-radius: 36px;
    padding: 15px;
    margin: 0 auto;
    }

    h2{ 
        padding: 10px;
        margin: 0 auto;
    }

    p{ 
        margin: 0 auto;
        display:block;
 font-size: 12px;
    }

    `;


const About = () => {
    return (
        <>
            <Spring
                from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ delay: 50, duration: 400 }}>
                {props => (
                    <animated.div style={props}>
                        <Title>About</Title>
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

                        <Container>
                        <Background>
                            <InfoBox>
                                <p>I'm currently studying front end development at a higher vocational education school called KYH in Stockholm. 
                </p>
              
                            </InfoBox>
                            </Background>
                            
                       
                 
      <FlexCont>   
      <IconContext.Provider value={{ color: 'white ', size: '38px' }}>           
<Section>           
<div>
<BsIcons.BsArrowsFullscreen />
</div>
<h2>Responsive</h2>
<p>My design will work on any device, big or small.</p>
</Section>

<Section>
<div>
<FaIcons.FaRegLightbulb />
</div>
<h2>Intuitive</h2>
<p>Strong preference for easy to use, intuitive UX/UI.
</p>
</Section>

<Section>
<div>
<ImIcons.ImFire />
</div>
<h2>Dynamic</h2>
<p>I like it when websites feel alive.</p>
</Section>
</IconContext.Provider> 
</FlexCont> 
                     
{/* <ChartTwo /> */}

                            <WeatherWithHooks />
                        </Container>
                    </animated.div>
                )}
            </Spring>
        </>
    );
}

export default About;