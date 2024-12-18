import React ,{useContext} from "react";
import UserContext from "../context/UserContext";
import UserContextProvider from "../context/UserContextProvider";


function Profile () {

    const {user} =useContext(UserContext);

    if(!user) return <div>Please Login</div>
    return( <div>
        Welcome: {user.username} <br/>
        Your password is: {user.password}
        </div> )
    
    }

    export default Profile;