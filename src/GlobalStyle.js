import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:#1a1c20;
  
 };

`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin:0 auto;
  height:auto;
`;
export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export default GlobalStyle