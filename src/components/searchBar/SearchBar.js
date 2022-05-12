import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

const SearchBarStyled = styled.div`
    background: ${({ theme }) => theme.zinc.i800};
    border-radius: 60px;
    cursor: pointer;
    padding: 8px;
    .input{
        background: ${({ theme }) => theme.zinc.i800};
        border: none;
        color: ${({ theme }) => theme.basics.white};
        font-size: 1.2em;
        line-height: 25px;
        outline: none;
        transition: 0.7s ease;
        width: 0;
    }
    .btn{
        align-items: center;
        background: ${({ theme }) => theme.zinc.i800};
        border-radius: 50%;
        color: ${({ theme }) => theme.green.i200};
        display: flex;
        float: right;
        justify-content: center;
        padding: 5px;
        text-decoration: none;
        transition: 0.4s ease;
    }
    :hover > .input,
    .input:focus{
        margin: 0 5px;
        width: 220px;
    }
    :hover > .btn,
    .input:focus + .btn{
        background: ${({ theme }) => theme.green.i200};
        color: ${({ theme }) => theme.basics.black};
    }
`

export function SearchBar(){
    return(
        <SearchBarStyled>
            <input type='text' placeholder='Search here...' className='input' />
            <a href='#' className='btn'>
                <BiSearchAlt />
            </a>
        </SearchBarStyled>
    )
}