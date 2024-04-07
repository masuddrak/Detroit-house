import Banner from "../components/Banner";
import HouseCard from "../components/HouseCard";
import SectionTitle from "../components/SectionTitle";
import {
   
    useLoaderData,
} from "react-router-dom";
const Home = () => {
    const allHouse = useLoaderData();
    // console.log(allHouse)
    // console.log("hello")
    return (
        <div className="mt-5">
            {/* banner */}
            <Banner></Banner>
            {/*section title  */}
            <SectionTitle></SectionTitle>
            <div className="grid md:grid-cols-3   gap-10">
                {allHouse.map(house=><HouseCard key={house.id} house={house}></HouseCard>)}
            </div>


        </div>
    );
};

export default Home;