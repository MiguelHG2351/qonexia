import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body {
        overflow-x: hidden;
    }

    :root {
        --width: 1440px;
    }

`