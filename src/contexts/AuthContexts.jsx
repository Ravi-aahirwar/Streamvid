import React, { createContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup

} from 'firebase/auth'
import { auth } from '../utils/firebase'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading , setLoading] = useState(true)
    // const [pathName, setPathName] = useState("");
    // const [query, setQuery] = useState("");

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logOut = ()=>{
        return signOut(auth);
    }
    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
        });
        return () => {
            unsubscribe();
            setLoading(false)
        };
    }, []);

    return (
        <AuthContext.Provider 
        value={{
            user,
            logIn,
            signUp,
            googleSignIn,
            logOut,
            loading
        }}
         >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;