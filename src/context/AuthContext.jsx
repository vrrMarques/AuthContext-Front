import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";


export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const loadingStoreData = async () =>{
            const storageUser = localStorage.getItem("user")
            const storageToken = localStorage.getItem("token")
    
            if(storageToken && storageUser) {
                setUser(storageUser)
            }
        }
        loadingStoreData()
    },[])

   

    const signIn = async ({ email, password }) => {
        try {
          const response = await api.post("/auth", { email, password });
          if (response.data.error) {
            alert(response.data.error);
          } else {
            setUser(response.data);
            api.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${response.data.token}`;
    
            localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
            localStorage.setItem("@Auth:token", response.data.token);
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <AuthContext.Provider value ={{
            user,
            signed: !!user,
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}