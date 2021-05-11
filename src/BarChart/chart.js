/* import styled from 'styled-components';
import { Spring, animated } from 'react-spring/renderprops';

const Container = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center; 
margin-bottom: 60px;
`;

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
 height: 100px; 
    width: 30px;
    background-image: linear-gradient(#c36e3cc5, #92471cdc);


};
`;

const Chart = () => {
    return ( 

        <Container>            
<Section>   
<p>90%</p>             
<div >
</div>
<h2>HTML</h2>
</Section>

<Section>
<p>85%
</p><div>
</div>
<h2>CSS</h2>
</Section>

<Section>
<p>60%</p><div>
</div>
<h2>JavaScript</h2>
</Section>

<Section>
<p>60%</p><div>
</div>
<h2>React</h2>
</Section>

<Section>
<p>10%</p><div>
</div>
<h2>Node.js</h2>
</Section>    

<Section>
<p>50%</p><div>
</div>
<h2>Figma</h2>
</Section>
 </Container>

    )
    } 
export default Chart; */