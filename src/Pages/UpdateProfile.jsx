import { useContext } from "react";
import { authContext } from "../components/AuthComponent";
import { Link } from "react-router-dom";


const UpdateProfile = () => {
    const { user } = useContext(authContext)

    console.log("update user", user)

    return (
        <div className=" gap-10 flex justify-center mt-10">
            <div className="text-center space-y-3">
                <div className="flex justify-center">
                    <img className="w-[60px] rounded-full " src={user?.photoURL} alt="" />
                </div>
                <h3 className="text-xl"><span className="font-bold">Name:</span> {user?.displayName}</h3>
                <h3 className="text-xl"><span className="font-bold">Email:</span>{user?.email}</h3>
                <Link to="/updateUserProfile" className="btn bg-blue-800 text-white">Update Now</Link>
            </div>

        </div>
    );
};

export default UpdateProfile;