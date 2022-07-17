import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from 'react';
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
    }
    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    },[])
    const logOut =()=>{
        signOut(auth)
        .then( () => {
            setUser({})
        })
    }
    return {
        user,
        handleGoogleSignIn,
        logOut
    };
};

export default useFirebase;