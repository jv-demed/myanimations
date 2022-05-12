import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background-color: ${({ theme }) => theme.zinc.i800};
        height: 200vh;
    }
    button{
        border: none;
        border-radius: 2px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 8pt;
        font-weight: bold;
        height: 30px;
        padding: 0 2px;
        width: 90px;
    }
    ::-webkit-scrollbar{
        width: 15px;
    }
    ::-webkit-scrollbar-track{
        background: ${({ theme }) => theme.violet.i300};
        border-radius: 30px;
    }
    ::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.basics.black};
        border-radius: 30px;
    }
`

export default GlobalStyle;