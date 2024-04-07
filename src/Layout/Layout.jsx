import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const Layout = () => {
    return (
        <div >
            <div className="md:w-4/5 md:mx-auto mx-3">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;