import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTrail, animated } from 'react-spring';

const PageContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`;

const ProjectsContainer = styled.ul`
display: flex;
align-items: center;
justify-content: center;
list-style-type: none;
flex-wrap: wrap;
flex-basis: 1100px;
padding: 0;
`;

const ProjectLI = styled.li`
display: flex;
flex-direction: column;
max-width: 300px;
margin: 20px;
background-color: white;
box-shadow: 1px 3px 5px rgba(0,0,0,0.5); 
`;

const ProjectTitle = styled.h2`
font-size: 20px;
color: #92471cdc;
margin-bottom: 10px;
text-align: center;
padding: 6px;
`;

const Images = styled.img`
width: 300px;
height: 180px; 

@media (min-width: 1024px) {
max-width: 280px;
max-height: 170px;
}
`;

const Projects = () => {
    const projects = [
        { title: 'Coffee Shop', link: './CoffeeShop', img: './images/CoffeeOne.png', id: 1 },
        { title: 'Text Editor', link: './TextEditor', img: './images/editorOne.png', id: 2 },
        { title: 'Portfolio', link: './Portfolioproject', img: './images/portfolio.png', id: 3 },
        { title: 'UX', link: './Ux', img: './images/eubike.png', id: 4 },
        { title: 'BEV', link: './Bev', img: './images/bev.png', id: 5 }
    ]

    const trail = useTrail(projects.length, {
        config: { delay: 1000, duration: 2800, mass: 5, tension: 3000, friction: 400 },
        opacity: 1,
        from: { opacity: 0 }
    });

    return (
        <PageContainer>
            <ProjectsContainer>
                {trail.map(({ opacity }, index) => (
                    <animated.div
                        key={projects[index].id}
                        style={{
                            opacity
                        }}>

                        <ProjectLI>
                            <div key={projects[index].id}>
                            <Link to={projects[index].link}><Images src={projects[index].img} /></Link>
                                <ProjectTitle>{projects[index].title}</ProjectTitle>
                                
                            </div>
                        </ProjectLI>

                    </animated.div>
                ))}

            </ProjectsContainer>
        </PageContainer >
    );
}

export default Projects;
