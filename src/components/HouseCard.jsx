
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineFullscreen } from "react-icons/ai";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



const HouseCard = ({ house }) => {
    const { id,image, estate_title, segment_name, description, price, status, area, location, facilities } = house
    return (
        <div>
            <div data-aos="flip-left" className="card card-compact  bg-base-100 shadow-xl">
                <figure><div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }} className=" min-h-[30vh] w-full bg-center bg-no-repeat  bg-cover bg-slate-900	rounded-md relative">
                    <div className='m-3  '>
                        <div className="flex justify-between">
                            <span className="bg-yellow-700 px-2 py-1 text-white rounded">{segment_name}</span>
                            <span className="bg-blue-800 px-2 py-1 text-white rounded">{status}</span>
                        </div>
                        <div className="text-white absolute bottom-1 font-semibold flex items-center gap-2">
                            <IoLocationOutline></IoLocationOutline>
                            <p>{location}</p>
                        </div>

                    </div>

                </div></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <h2 className="card-title text-blue-800">{price}</h2>
                    {description.length > 200 ? <p>{description.slice(0, 200)}....</p> : description}
                    <div className="flex items-center gap-2">
                        <AiOutlineFullscreen className="text-xl border-[0.5px] border-gray-500"></AiOutlineFullscreen>
                        <p>{area}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {facilities.map((facilitie, index) => <li key={index}>{facilitie}</li>)}
                    </div>
                    <div className="card-actions ">
                        <Link to={`/houseDetails/${id}`} className="btn bg-blue-800 hover:bg-black text-white">View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;
HouseCard.propTypes = {
    house: PropTypes.object,
}