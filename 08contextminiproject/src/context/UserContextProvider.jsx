import React,{useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=> {
    
    const [user,setUser] = useState(null); // this is the state where we use the user,setuser for getting the state updated.

    return (
        <UserContext.Provider value={{user,setUser}}>  {/* when create the context use React.createContext in usercontext file then that variable would get the properties like provider which is used to with the hook useContext and to transfer the data , and here all the children inside this usercontextprovider can access those values whihch are passed in the props as children means all the children inside this can access the values which are inserted from the usestate hook using user,setuser parameters */}
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;