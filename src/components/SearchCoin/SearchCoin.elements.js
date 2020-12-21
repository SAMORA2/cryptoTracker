import styled from 'styled-components'
import { Container } from '../../GlobalStyle';


export const SearchNav = styled(Container)`
height:180px;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
text-align:center;
background-color:#1a1c20;
padding:5px;
@media screen and (max-width: 665px) {
    height:140px
}
   
${Container}
`;



export const Title = styled.h1`
margin:0 auto;
width:calc(100% - 3em);
font-size: 2.8em; 
color:lightgrey;

@media screen and (max-width: 760px) {
    font-size:clamp(4.8vw,0.5vw,5vw)
}
`;

export const Form = styled.form`

font-size:2rem;
display:flex;
justify-content:center;
align-items:center;
`;

export const FormInput = styled.input`

font-size:20px;
padding-left:25px;
padding-right:25px;
height:40px;
width:300px; 
border:none;
color:black;
background: darkgray;
border-radius:8px;
outline:none;
margin-right:15px;
@media screen and (max-width: 660px) {
    width:clamp(200px,70%,500px)
}

`;





