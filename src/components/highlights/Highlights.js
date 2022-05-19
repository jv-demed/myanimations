import MyHighlight from "./MyHighlight";
import PulseCircle from './PulseCircle';

export function Highlights(){
    return(
        <div className='animationGroup'>
            <h2>Highlights</h2>
            <div>
                <MyHighlight />
                <PulseCircle />
            </div>
        </div>
    )
}