import styled, { createGlobalStyle } from 'styled-components';

// d22e4c Froot
// d91e40 Nice red
const theme = {

  colors: {
    primary: '#d22e4c',
    primaryHover: '',
    primaryActive: '',
    dmpBlue: '#0f274d',
    button: '#262645',
    blurpleLight: '#5865F2',
    blurpleSemi: '#808AFF',
    green: '#2ecc71',
    pink: '#eb459e',
    red: '#d22e4c',
    lightGray: '#36393F',
    black: '#000000',

    textLight: '#E6F1FF',
    white: '#ffffff',
    textDim: '#919BA8',
    textDark: '#11111f',
    // background: '#1b203a',
    background: 'rgb(17, 17, 31)',
    boxColor: '#1c1c33',
    textTest: '#bec4d7',
    level4: '#ffe061',
    level3: '#ffa061',
    level2: '#2ecc71',
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
    /* background: linear-gradient(180deg, rgba(29,29,54,1) 0%, rgba(17,17,31,1) 95%); */
    /* background: linear-gradient(180deg, rgba(22,16,38,1) 0%, rgba(17, 17, 31, 1) 95%); */
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #919BA8; 
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #E6F1FF; 
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

export const ButtonDesign = styled.div`
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
    color: ${theme.colors.textDark};
  }
`;

export { theme };