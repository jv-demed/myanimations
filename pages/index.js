import styled from 'styled-components';
import MyHighlight from "../src/components/highlights/MyHighlight";
import DoubleEffect from '../src/components/buttons/DoubleEffect';
import BorderEffect from '../src/components/buttons/BorderEffect';

const HomeStyled = styled.main`
    align-items: center;
    display: flex;
    justify-content: center;
`

export default function Home(){
    return(
        <HomeStyled>
            <MyHighlight />
            <DoubleEffect />
            <BorderEffect />
        </HomeStyled>
    )
}