import styled from 'styled-components';
import Box from '../Box';

const DoubleEffectStyled = styled.button`
    background-color: ${({ theme }) => theme.colors.tomato};
    transition: 1s;
    :hover{
        background-color: rgba(0,0,0,0);
        border: 2px solid ${({ theme }) => theme.colors.tomato};
        color: ${({ theme }) => theme.colors.tomato};
    }
`

export default function DoubleEffect(){
    return(
        <Box>
            <DoubleEffectStyled>
                BorderEffect
            </DoubleEffectStyled>
        </Box>
    )
}