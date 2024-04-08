import { createContext } from "react";
import PropTypes from 'prop-types';


export const authContext=createContext()
const AuthComponent = ({children}) => {
    

    const authInfo={name:"sakib"}
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