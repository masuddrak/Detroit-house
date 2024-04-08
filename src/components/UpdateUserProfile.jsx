
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
const UpdateUserProfile = () => {
    const handelUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        console.log(photo, name)
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {
            // Profile updated!
            // ...
        }).catch(() => {
            // An error occurred
            // ...
        });
    }
    return (
        <div className=" w-1/5 bg-gray-600 p-6">
            <h2 className="text-2xl font-bold my-3 text-center">Update User </h2>
            <form onSubmit={handelUpdateProfile} className="space-y-6 text-white">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                    <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photo" className="block dark:text-gray-600">Photo</label>
                    <input type="text" name="photo" placeholder="Phot url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />

                </div>
                <button className="block w-full p-3 text-center rounded-sm bg-blue-800 text-white">Sign in</button>
            </form>
        </div>
    );
};

export default UpdateUserProfile;