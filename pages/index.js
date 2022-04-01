import styled from 'styled-components';
import MyHighlight from "../src/components/highlights/MyHighlight";

const HomeStyled = styled.main`
    align-items: center;
    display: flex;
    justify-content: center;
`

export default function Home(){
    return(
        <HomeStyled>
            <MyHighlight />
        </HomeStyled>
    )
}