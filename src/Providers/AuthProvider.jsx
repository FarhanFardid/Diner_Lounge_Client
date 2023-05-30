import { createContext, useState} from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


 export const AuthContext = createContext(null); 
const AuthProvider = ({children}) => {
const[user,setUser] = useState(null);
const[loading,setLoading] = useState(true);

    const auth = getAuth(app);
  
    const createUser=(email,password)=>
    {
        setLoading(false)
     return createUserWithEmailAndPassword(auth,email,password)

    }
    const userSignIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    } 

    const logOut = () =>{
        return signOut(auth)
    }
    const authInfo={
        user,
        loading,createUser,userSignIn,logOut

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;