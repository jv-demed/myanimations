import styled from 'styled-components';
import Box from '../Box';

const DoubleEffectStyled = styled.button`
    background-color: ${({ theme }) => theme.colors.cyan};
    transition: 0.5s;
    :hover{
        box-shadow: 5px 5px 0px #ff96ad;
        position: relative;
        left: -2px;
        top: -2px;
    }
`

export default function DoubleEffect(){
    return(
        <Box>
            <DoubleEffectStyled>
                DoubleEffect
            </DoubleEffectStyled>
        </Box>
    )
}