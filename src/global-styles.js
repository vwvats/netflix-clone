import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        -webkit-backface-visibility: hidden; 
        -ms-transform: translateZ(0);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }

    html {
        scroll-behavior: smooth;
    }

    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #333333;
        font-size: 16px;
        margin: 0;
    }
`;