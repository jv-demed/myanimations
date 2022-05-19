import styled from 'styled-components';
import Box from '../Box';

const PulseCircleStyled = styled.div`
    @keyframes circle{
        0%{
            border-color: ${({ theme }) => theme.blue.i500};
            transform: scale(1);
        }25%{
            border-color: ${({ theme }) => theme.green.i500};
            transform: scale(0.8);
        }50%{
            border-color: ${({ theme }) => theme.purple.i500};
            transform: scale(1.3);
        }75%{
            border-color: ${({ theme }) => theme.yellow.i500};
            transform: scale(0.7);
        }100%{
            border-color: ${({ theme }) => theme.blue.i500};
            transform: scale(1);
        }
    }
    animation: circle 2s ease-in-out infinite;
    border: 5px solid blue;
    height: 50px;
    padding: 5px;
    width: 50px;
`

export default function PulseCircle(){
    return(
        <Box>
            <PulseCircleStyled className='circleBorder circleBorder' />
        </Box>
    )
}