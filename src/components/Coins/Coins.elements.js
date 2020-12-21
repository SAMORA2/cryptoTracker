import styled from 'styled-components'


export const CoinRow = styled.div`
width:80%;
height:80px;
display:flex;
align-items:center;
justify-content:space-between;
margin:25px auto 15px auto;
border-bottom:1px solid #2a2a2a;
`;

export const CoinInfo = styled.div`

display:flex;
justify-content:space-around;
align-items:center;
flex:1;

@media screen and (max-width:950px){
    
   flex:0.7;
 }
`;

export const CoinData = styled.div`

display:flex;
justify-content:space-between;
align-items:center;
margin-left:25px;
flex:1;

@media screen and (max-width:770px){
    
    width: 750px;
 }
`;

export const CoinImg = styled.img`
height: 45px;
width: 45px;
@media screen and (max-width:991px){
    height: 35px;
    width: 35px;
 }
 @media screen and (max-width:540px){
    
    height: 25px;
    width: 25px;
 }
`;
export const SubHeading = styled.p`
 font-size: 24px;
 width: auto;
 color:#eec6c6;
 @media screen and (max-width:991px){
   
    font-size: clamp(2px, 2.5vw, 20px); 
   
 }

`;

export const CoinChange = styled.p`
font-size:24px;
color:${({ asc }) => (asc ? 'green' : 'red')};
@media screen and (max-width:991px){
    font-size: clamp(2px, 2.5vw, 20px);
 }
`