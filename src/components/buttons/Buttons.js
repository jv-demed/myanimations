import BorderEffect from "./BorderEffect";
import DoubleEffect from "./DoubleEffect";

export function Buttons(){
    return(
        <div className='animationGroup'>
            <h2>Buttons</h2>
            <div>
                <BorderEffect />
                <DoubleEffect />
            </div>
        </div>
    )
}