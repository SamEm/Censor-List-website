import styled, { createGlobalStyle } from 'styled-components';

// d22e4c Froot
// b5d784 Froot green
// d91e40 Nice red
const theme = {

  colors: {
    primary: '#b5d784',
    primaryHover: '#d22e4c',
    primaryActive: '',
    button: 'rgba(38, 38, 69, 1)',
    buttonHover: 'rgba(34, 34, 61, 1)',
    green: 'rgba(46, 204, 113, 1)',
    greenHover: 'rgba(42, 184, 102, 1)',
    red: '#d22e4c',
    redHover: '#e63253',
    black: '#000000',
    white: '#ffffff',
    background: 'rgb(17, 17, 31)',
    boxColor: '#1c1c33',

    scrollBarThumb: '#919BA8',
    scrollBarThumbHover: '#E6F1FF',
  },
  shading: {
    soft: 'box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);',
    hard: 'box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.4);'
  }
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.white};
  }
  
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.scrollBarThumb};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.scrollBarThumbHover}; 
  }
  ::-webkit-scrollbar-corner {
    border-radius: 10px;
  }

  a {
    color: ${theme.colors.white};
  }
`;


export const OuterContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const InnerCont = styled.div`
  /* display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  padding: 0 50px; */
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const H1 = styled.h1`
  font-size: 2rem;
  letter-spacing: .3px;
`;

export const H3 = styled.h3`
  margin-bottom: 10px;
`;

export const RoundButtonDesign = styled.div`
  border: 1px solid ${theme.colors.green};
  color: ${theme.colors.white};
  padding: 0 25px;
  border-radius: 30px;
  height: 40px;
  line-height: 40px;
  ${theme.shading.hard};
  cursor: pointer;
  font-size: 14px;
  letter-spacing: .5px;
  font-weight: bold;
  text-align: center;

  :hover {
    background: ${theme.colors.green};
    color: ${theme.colors.black};
  }
`;

export { theme };