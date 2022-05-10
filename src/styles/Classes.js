import { createGlobalStyle } from 'styled-components';

const Classes = createGlobalStyle`
    .animationGroup{
        h2{
            margin-bottom: 5px;
        }div{
            display: flex;
        }
    }
    .borderRed{
        border: 1px solid red;
    }
    .circleBorder{
        border-radius: 100%;
    }
    .typography{
        color: ${({ theme }) => theme.basics.white};
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`

export default Classes;