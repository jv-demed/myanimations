import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background-color: ${({ theme }) => theme.bgs.main};
        height: 100vh;
        padding: 20px 60px;
    }
`

export default GlobalStyle;