import { createContext, useEffect, useState} from "react";
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


 export const AuthContext = createContext(null); 
const AuthProvider = ({children}) => {
const[user,setUser] = useState(null);
const[loading,setLoading] = useState(true);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // const fbProvider = new FacebookAuthProvider();

  
    const createUser=(email,password)=>
    {
        setLoading(false)
     return createUserWithEmailAndPassword(auth,email,password)

    }
    const userSignIn =(email,password) =>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    } 
    const userUpdate = (user,name,photo)=>{
        setLoading(false)
       return updateProfile(user, {
            displayName: name , photoURL: photo
          })
    }
    const google=()=>{
        setLoading(false)
        return signInWithPopup(auth,googleProvider)

    }
    const github=() =>{
        setLoading(false)
        return signInWithPopup(auth,githubProvider)
    }
    // const facebook=()=>{
    //     setLoading(false)
    //     return signInWithPopup(auth,fbProvider)
    // }

    const logOut = () =>{
        return signOut(auth)
    }
    const authInfo={
        user,
        loading,
        createUser,
        userSignIn,
        logOut,
        userUpdate,
        google,
        github,

    }
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);

    });
    return ()=>{
        unsubscribe();
    }
   },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;