import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const providerSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = { user, createUser, signIn, providerSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;