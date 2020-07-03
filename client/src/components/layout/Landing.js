import React from "react";
import { Link } from "react-router-dom";

const Landing = () =>{
    return(
        <div style={{ height: "75vh" }}>
        <div>
            <h4> Dr. Bot here to help you track sypmtoms and help explain some early indications that you may have Covid-19 </h4>
            <p>
                Create a (minimal) full-stack app with user authentication via
                passport and JWTs
            </p>
            <br />
            <div>
                <Link to="/register" ><button>Register</button></Link>
            </div>
            <div>
                <Link to="/login"><button>Log In</button></Link>
            </div>
        </div>
    </div>

    )
}

export default Landing;