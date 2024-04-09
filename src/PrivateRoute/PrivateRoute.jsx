import { useContext } from "react";
import { authContext } from "../components/AuthComponent";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, userLoader } = useContext(authContext)
    const location = useLocation()
    console.log(location)
    if (userLoader) {
        return <div className="min-h-[70vh] flex justify-center items-center">
            <h1 className="text-5xl">loading....</h1>
        </div>
    }
    if (user) {
        return children
    }

    return (<Navigate to="/login" state={location.pathname}></Navigate>);
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node,
}