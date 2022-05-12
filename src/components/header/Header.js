import styled from 'styled-components';
import { SearchBar } from '../searchBar/SearchBar';

const HeaderStyled = styled.header`
    align-items: center;
    background-color: ${({ theme }) => theme.basics.black};
    display: flex;
    height: 10vh;
    justify-content: space-between;
    padding: 0 80px;
`

export function Header(){
    return(
        <HeaderStyled className='typography'>
            <h1>My Animations</h1>
            <SearchBar />
        </HeaderStyled>
    )
}