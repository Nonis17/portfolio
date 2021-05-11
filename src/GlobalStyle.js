import { createGlobalStyle } from 'styled-components';
 
const DefaultGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  
    z-index: -1;
 background-color: white; 
/* content: "";
position: fixed; */
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
background - position: center center;
background - repeat: no - repeat;
background - attachment: fixed;
background - size: cover;
  } 
`;


export default DefaultGlobalStyle;