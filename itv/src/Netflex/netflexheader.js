
export function NetflexHeader(){
    return(
        <div className="d-flex justify-content-between">
            <h2 className="text-danger"> NETFLEX</h2>
            <div className="d-flex p-2 me-5 ">
                <select className="">
                    <option>SELECT LANGUAGE</option>
                    <option>TELEGU</option>
                    <option>ENGLISH</option>
                </select>
                <button className="btn btn-danger">SIGN IN</button>
               
            </div>
            
        </div>
    )
}