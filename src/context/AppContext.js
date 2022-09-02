import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const getUserFromLocalStorage = () => {
        let user=localStorage.getItem("user");
        if(user){
            return JSON.parse(user);
        }
        
    }
    const [user, _setUser] = useState(getUserFromLocalStorage()??'');
    const [alert, setAlert] = useState({});
    const [loading, setLoading] = useState(false);

    const setUser=(user)=>{      
        localStorage.setItem("user", JSON.stringify(user));
        _setUser(user);
    }
    
    const values = {
        user,
        setUser,
        alert,
        setAlert,
        loading,
        setLoading
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}