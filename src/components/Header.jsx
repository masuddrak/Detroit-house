import { Link, NavLink } from "react-router-dom";

import "../CSS/headerCss.css"
import { useContext } from "react";
import { authContext } from "./AuthComponent";
import auth from "../Firebase/firebase.config";
import { HiHomeModern } from "react-icons/hi2";
const Header = () => {
    const { user,logoutUser,setUserLoader } = useContext(authContext)
const logoutHandler=()=>{
    logoutUser(auth)
    setUserLoader(false)
}
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {
            user?<li><NavLink to="/updateProfile">User Profile</NavLink></li>:""
        }
        <li><NavLink to="/updateUserProfile">Update Profile </NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 border-b-[1px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link className="text-xl font-extrabold flex items-center"><HiHomeModern></HiHomeModern>DETROIT </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end ">

                    {user ? <div className="">

                        <div className="dropdown dropdown-end dropdown-hover">
                            <div tabIndex={0}  className=" m-1"><img className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] object-cover rounded-full" src={user?.photoURL}></img></div>
                            <ul tabIndex={0} className="dropdown-content z-[10]  menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>{user?.displayName}</a></li>
                                <li><button onClick={logoutHandler} className="btn bg-slate-500">Logout</button></li>
                            </ul>
                        </div>
                    </div> : <Link to="/login" className="btn">Login</Link>}

                </div>
            </div>
        </div>
    );
};

export default Header;