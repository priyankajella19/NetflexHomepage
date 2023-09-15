import '../Netflex/Netflexindexx.css';
import { NetflexHeader } from './netflexheader';
import { Netflexmain } from './netflexmain';
export function Netflexindex(){
    return(
        <div className='main'>
            <div className="background-image">
            <NetflexHeader/>
            <Netflexmain/>
        </div>
       
        </div>
    )
}