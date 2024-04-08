import { useContext } from "react";
import { authContext } from "../components/AuthComponent";

const UpdateProfile = () => {
    const {user}=useContext(authContext)
    console.log("update user",user?.photoURL)
    return (
        <div>
            {user?.displayName}
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default UpdateProfile;