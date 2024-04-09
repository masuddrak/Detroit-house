
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useContext } from "react";
import { authContext } from "./AuthComponent";
import { useNavigate  } from "react-router-dom";
import {Helmet} from "react-helmet";
const UpdateUserProfile = () => {
    
    const {user,setUserLoader}=useContext(authContext)
    const naviget=useNavigate()
    const handelUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        console.log(photo, name)
        updateProfile(auth.currentUser, {
           
            displayName: name, photoURL: photo
        }).then(() => {
            setUserLoader(true)
            // Profile updated!
            // ...
            naviget("/updateProfile")
            setUserLoader(false)
        }).catch(() => {
            // An error occurred
            // ...
        });
    }
    return (
        <div className="  flex justify-center mt-10">
            <div className="md:w-1/5 w-full bg-gray-600 p-6">
            <Helmet> <title>Eidt Profile</title></Helmet>
                <h2 className="text-2xl font-bold my-3 text-center">Update User </h2>
                <form onSubmit={handelUpdateProfile} className="space-y-6 text-white">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                        <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <input disabled type="text" name="email" placeholder={user?.email} className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photo" className="block dark:text-gray-600">Photo</label>
                        <input type="text" name="photo" placeholder="Phot url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm bg-blue-800 text-white">Save Change</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUserProfile;