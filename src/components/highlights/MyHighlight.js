import styled from 'styled-components';
import Box from '../Box';
import Imgs from '../../assets/Imgs';

const MyHighlightStyled = styled.div`
    @keyframes rotate{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes inv{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
    background-image: linear-gradient(
        45deg, 
        ${({ theme }) => theme.pink.i800}, 
        ${({ theme }) => theme.yellow.i700}
    );
    height: 80px;
    padding: 5px;
    width: 80px;
    animation: rotate 0.5s linear infinite;
    img{
        height: 100%;
        width: 100%;
        animation: inv 0.5s linear infinite;
    }
`

export default function MyHighlight(){
    return(
        <Box>
            <MyHighlightStyled className='circleBorder'>
                <img src={Imgs.aatrox} className='circleBorder'/>
            </MyHighlightStyled>
        </Box>
    )
}