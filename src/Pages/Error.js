import styled from 'styled-components';

const TextContainer = styled.div`
display: flex;
justify-content: center; 
align-itemes: center; 
flex-flow: column-wrap;
margin-top: 100px;
padding: 20px;
background-image: linear-gradient(#c36e3cc5, #92471cdc);  

`;

const Title = styled.h2`
color: white; 
text-align: center;
margin-top: 50px;
margin-bottom: 50px;
`;

const InfoBox = styled.div`
width: 50%;
padding: 10px 50px 10px 50px;
border-radius: 6px;

`;

const Text = styled.p`
color: white;
font-size: 14px;
text-align: center;
`;

const ErrorPage = () => {
    return (
        <TextContainer>
            <InfoBox>
                <Title>You did something wrong </Title>
                <Text>Try again!</Text>
            </InfoBox>
        </TextContainer>
    );
}

export default ErrorPage;
