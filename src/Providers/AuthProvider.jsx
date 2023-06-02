import { createContext, useEffect, useState} from "react";
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";


 export const AuthContext = createContext(null); 
const AuthProvider = ({children}) => {
const[user,setUser] = useState(null);
const[loading,setLoading] = useState(true);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // const fbProvider = new FacebookAuthProvider();

    const google=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)

    }
    const createUser=(email,password)=>
    {
        setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)

    }
    const userSignIn =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    } 
    const userUpdate = (user,name,photo)=>{
        setLoading(true)
       return updateProfile(user, {
            displayName: name , photoURL: photo
          })
    }
   
    const github=() =>{
        setLoading()
        return signInWithPopup(auth,githubProvider)
    }
    // const facebook=()=>{
    //     setLoading(false)
    //     return signInWithPopup(auth,fbProvider)
    // }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then (data =>{
                    console.log(data.data.token);
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
    
        });
        return ()=>{
            unsubscribe();
        }
       },[])
       
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


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;