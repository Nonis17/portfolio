
import Projects from './Projects';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring/renderprops';

const Title = styled.h2`
padding-top: 50px;
font-size: 40px;
color: #C36D3C; 
margin: 0 auto;
margin-bottom: 50px;
text-align: center;
`;

const Portfolio = (props) => {

    return (
        <div>
            <Spring
                from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ delay: 50, duration: 400 }}>
                {props => (
                    <animated.div style={props}>
                        <Title>Projects</Title>
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
                        <Projects />
                    </animated.div>
                )}
            </Spring>
        </div>
    );
}

export default Portfolio;