import {Link} from "react-router-dom";

function Missing (){
    return(
        <div className="missing">
            <h2>This page does not exist here</h2>
            <Link to="/">Click to jump to the Repositories Page</Link>
        </div>
    )
}

export default Missing;