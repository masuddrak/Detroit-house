

import person1 from "../assets/person-3-500x328.jpg"
import person2 from "../assets/person3-2-500x328.jpg"
import person3 from "../assets/person4-2-500x328.jpg"
import person4 from "../assets/person8-2-500x328.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";



const OurAgent = () => {
    return (
        <div className="grid md:grid-cols-4 gap-4">
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={person1} alt="Shoes" /></figure>
                <div className="p-2">
                    <h2 className="card-title">Michaela Roja</h2>
                    <p className='text-neutral mb-2'>real estate broker</p>
                    <p>Michaela’s sociability, independent spirit, and incredible customer service set him apart as a top ...</p>
                    <div className="flex justify-between mt-10 text-gray-400">
                        <div className="flex gap-2">
                            <FaFacebookF></FaFacebookF>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                            <RiPinterestLine></RiPinterestLine>
                            <AiOutlineLinkedin></AiOutlineLinkedin>
                        </div>
                        <div className="flex gap-2">
                            <MdOutlineEmail></MdOutlineEmail>
                            <MdOutlinePhone></MdOutlinePhone>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={person2} alt="Shoes" /></figure>
                <div className="p-2">
                    <h2 className="card-title">Maria Barlow</h2>
                    <p className='text-neutral mb-2'>sales executive</p>
                    <p>Michaela’s sociability, independent spirit, and incredible customer service set him apart as a top ...</p>
                    <div className="flex justify-between mt-10 text-gray-400">
                        <div className="flex gap-2">
                            <FaFacebookF></FaFacebookF>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                            <RiPinterestLine></RiPinterestLine>
                            <AiOutlineLinkedin></AiOutlineLinkedin>
                        </div>
                        <div className="flex gap-2">
                            <MdOutlineEmail></MdOutlineEmail>
                            <MdOutlinePhone></MdOutlinePhone>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={person3} alt="Shoes" /></figure>
                <div className="p-2">
                    <h2 className="card-title">Janet Richmond</h2>
                    <p className='text-neutral mb-2'>selling agent</p>
                    <p>Michaela’s sociability, independent spirit, and incredible customer service set him apart as a top ...</p>
                    <div className="flex justify-between mt-10 text-gray-400">
                        <div className="flex gap-2">
                            <FaFacebookF></FaFacebookF>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                            <RiPinterestLine></RiPinterestLine>
                            <AiOutlineLinkedin></AiOutlineLinkedin>
                        </div>
                        <div className="flex gap-2">
                            <MdOutlineEmail></MdOutlineEmail>
                            <MdOutlinePhone></MdOutlinePhone>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={person4} alt="Shoes" /></figure>
                <div className="p-2">
                    <h2 className="card-title">Michael Rutter</h2>
                    <p className='text-neutral mb-2'>buying agent</p>
                    <p>Michaela’s sociability, independent spirit, and incredible customer service set him apart as a top ...</p>
                    <div className="flex justify-between mt-10 text-gray-400">
                        <div className="flex gap-2">
                            <FaFacebookF></FaFacebookF>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                            <RiPinterestLine></RiPinterestLine>
                            <AiOutlineLinkedin></AiOutlineLinkedin>
                        </div>
                        <div className="flex gap-2">
                            <MdOutlineEmail></MdOutlineEmail>
                            <MdOutlinePhone></MdOutlinePhone>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAgent;