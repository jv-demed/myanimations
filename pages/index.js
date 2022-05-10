import styled from 'styled-components';
import { Highlights } from "../src/components/highlights/Highlights";
import { Loadings } from '../src/components/loadings/Loadings';
import { Buttons } from '../src/components/buttons/Buttons';

const HomeStyled = styled.main`
    align-items: left;
    display: flex;
    flex-direction: column;
    gap: 18px;
    justify-content: center;
`

export default function Home(){
    return(
        <HomeStyled className='typography'>
            <Highlights />
            <Loadings />
            <Buttons />
        </HomeStyled>
    )
}