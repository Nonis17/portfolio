import styled from 'styled-components';



export const Title = styled.h2`
    color: #C36D3C; 
    font-size: 40px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const Picture = styled.img`
margin: 10px;

border-radius: 4px;
cursor: pointer;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
cursor: pointer;

transition: width 1s, height 1s, transform 2s;
width: ${props => props.isSelectedIndex ? "880px" : "380px"};
height: ${props => props.isSelectedIndex ? "670px" : "270px"};

@media (max-width: 375px) {
    width: 280px;
    height: 170px;
  }
`;

export const TextContainer = styled.div`
display: flex;
justify-content: center; 
align-itemes: center; 
flex-flow: column-wrap;
margin-bottom: 30px;
padding: 20px;
background-image: linear-gradient(#c36e3cc5, #92471cdc);  
`;

export const InfoBox = styled.div`
width: 50%;

@media (max-width: 414px){
    width: 100%;
    padding: 0px;
}

a { 
    color: #92471cdc;
    text-decoration: none; 
}

button { 
    padding: 5px;
margin-left: 5px; 
    background-color: white;
    outline: none; 
    border: none; 
    border-radius: 4px; 
   

&: hover{
    cursor: pointer;
    text-decoration: underline;
}
}

h3 {
    color: white;
}

p { 
    color: white;
    line-height: 1.7;
    font-size: 14px;
    margin-bottom: 30px;
}

span { 
    border-radius: 36px;
    padding: 0px 2px 0px 2px;
    font-size: 12px;
}
}`;



export const PictureContainer = styled.div`
display: flex; 
align-items: center;
justify-content: space-evenly;
flex-direction: row;
flex-wrap: wrap;
`;