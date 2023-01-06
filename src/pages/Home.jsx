import { Link } from "react-router-dom";
import { useState } from "react";

function Home(){
    const [user, setUser] = useState("shegun-istaken")

    function handleChange(e){
        setUser(e.target.value)
    }
    return(
        <form className="homePage">
            <label htmlFor="usern">Enter your Github UserName here</label>
            <div>
                <p>Ignore this and hit SUBMIT to see my Repositories</p>
            <input type="text" id="usern" onChange={handleChange} placeholder="shegun-istaken" />
            </div>
          
            <Link to="/repos" state={`${user}`} >
              <button>Submit</button>
            </Link>
        </form>
    )
}

export default Home;