import Banner from "../components/Banner";
import HouseCard from "../components/HouseCard";
import SectionTitle from "../components/SectionTitle";
import {

    useLoaderData,
} from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { HiHomeModern } from "react-icons/hi2";
import { PiGooglePlayLogoLight } from "react-icons/pi";
import { LiaKeySolid } from "react-icons/lia";
import { AiOutlineDollar } from "react-icons/ai";

import Services from "../components/Services";
import { Helmet } from "react-helmet";
import OurAgent from "../components/OurAgent";
const Home = () => {
    const allHouse = useLoaderData();
    // console.log(allHouse)
    // console.log("hello")
    return (
        <div className="mt-5">
            <Helmet><title>DETROIT COMMERCIAL
                REAL ESTATE</title></Helmet>
            {/* banner */}
            <Banner></Banner>
            {/*section title  */}
            <SectionTitle subTitle={"DETROIT LISTINGS"} mainTitle={"LATEST PROPERTIES"}></SectionTitle>
            <div className="grid md:grid-cols-3   gap-10">
                {allHouse.map(house => <HouseCard key={house.id} house={house}></HouseCard>)}
            </div>
            {/*section title  */}
            <SectionTitle subTitle={"DETROIT REAL ESTATE"} mainTitle={"OUR SERVICES"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10">
                <Services mainTitle={"SELL SPACES"} icon={<FaHandsHelping />} subTitle={"We do a free evaluation to be sure you want to start selling."}></Services>

                <Services mainTitle={"RENT SPACES"} icon={<IoSettingsOutline />} subTitle={"We do a free evaluation to be sure you want to start selling."}></Services>

                <Services mainTitle={"BUY SPACES"} icon={<HiHomeModern />} subTitle={"We do a free evaluation to be sure you want to buy it."}></Services>

                <Services mainTitle={"FREE MARKETING"} icon={<PiGooglePlayLogoLight />} subTitle={"We advertise your listing on most popular social media networks."}></Services>

                <Services mainTitle={"TENANT SERVICES"} icon={<LiaKeySolid />} subTitle={"Rent long-term or short-term industrial, commercial, or offices."}></Services>

                <Services mainTitle={"LANDLORD SERVICES"} icon={<AiOutlineDollar />} subTitle={"We advertise your listing on most popular social media networks."}></Services>

            </div>
            {/* our agent */}
            <SectionTitle subTitle={"DETROIT AGENTS"} mainTitle={"OUR AGENTS"}></SectionTitle>
            <div>
                <OurAgent></OurAgent>
            </div>

        </div>
    );
};

export default Home;