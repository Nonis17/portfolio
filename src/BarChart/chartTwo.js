import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';


const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 25px;
align-items: center;
flex-wrap: wrap;

h2{
    position: relative;
}

div{
    height: 100px /*  ${props => props.percentage} */ ; 
    width: 30px;
    background-image: linear-gradient(#c36e3cc5, #92471cdc);
};
`;

const PageContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center; 
margin-bottom: 60px;
`;

const Chart = () => {

    const skills = [
        { title: 'HTML', height:'90px', id: 1 },
        { title: 'CSS', height:'85px',  id: 2 },
        { title: 'JavaScript', height:'60px',  id: 3 },
        { title: 'React', height:'60px', id: 4 },
        { title: 'Node.js', height:'10px', id: 5 },
        { title: 'Figma', height:'30px',  id: 6 },
    ]

    const trail = useTrail(skills.length, {
        config: { delay: 900, duration: 2800, mass: 5, tension: 3000, friction: 400 },
        opacity: 1,
        from: { opacity: 0 }
    });

    return ( 
        <PageContainer>

            {trail.map(({ opacity }, index) => (
                <animated.div
                    key={skills[index].id}
                    style={{
                        opacity
                    }}>

<Section>  
                 
                        <div key={skills[index].id} /* percentage={skills[index].height} */></div>
                        <h2>{skills[index].title}</h2>
                        </Section>  
                </animated.div>
            ))}

    </PageContainer >

    )
    } 
export default Chart;