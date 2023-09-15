import "../Netflex/Netflexmainc.css";
import { Register } from "./netflexregister";
export function Netflexmain(){

    return(
        <div className="container mt-5">
            <h3>
           The biggest Indian hits. Ready to watch here from ₹ 149.
            </h3>
            <p>Join today. Cancel anytime.</p>
            <Register></Register>
        </div>
    )
}