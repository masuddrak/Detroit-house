import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const authContext = createContext()

const AuthComponent = ({ children }) => {
    const [userLoader, setUserLoader] = useState(true)
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setUserLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setUserLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logoutUser = (auth) => {
        setUserLoader(true)
        return signOut(auth)
    }
    useEffect(() => {
        const obseverId = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setUserLoader(false)
            return (() => {
                obseverId()
            })
        });

    }, [])


    const authInfo = { createUser, loginUser, logoutUser, user,userLoader, setUserLoader }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthComponent;
AuthComponent.propTypes = {
    children: PropTypes.node,
}