
import { useEffect, useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { useLoaderData, } from "react-router-dom";
import {Helmet} from "react-helmet";
const HouseCardDetails = () => {
    const { id } = useParams()
    const allHouse = useLoaderData();
    const [findHouse, setFindHouse] = useState({})
    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = findHouse
    useEffect(() => {
        const filterHouse = allHouse.find(house => house.id == id)
        setFindHouse(filterHouse)
    }, [allHouse, id])
    console.log(findHouse)
    return (
        <div >
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col w-full items-center  overflow-hidden rounded">
                    <img src={image} alt="" className="w-full md:min-h-[50vh] object-cover sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 w-full lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-blue-800 text-white">
                        <div className='grid grid-cols-2  md:grid-cols-4 md:gap-10'>
                            <div>
                                <p className='text-xl font-semibold'>Property ID</p>
                                <p>{id}</p>
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>Status</p>
                                <p>{status}</p>
                            </div>

                            <div>
                                <p className='text-xl font-semibold'>Price</p>
                                <p>{price}</p>
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>Area</p>
                                <p>{area}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* details body */}
                <div className='mt-10'>
                    <div>
                    <Helmet> <title>{estate_title}</title></Helmet>
                        <h3 className='text-xl font-bold text-gray-400'>Segment_name: <span className='text-xl'>{segment_name}</span></h3>
                        <h3 className='text-2xl font-bold mt-2'>Estate_title: {estate_title}</h3>
                        <div className="  font-semibold flex items-center gap-2 text-gray-400">
                            <IoLocationOutline></IoLocationOutline>
                            <p>{location}</p>
                        </div>
                        <div className="md:flex items-center gap-3">
                            <span className='text-xl font-bold text-gray-400'> Facilitie: </span>
                            {facilities?.map((facilitie, index) => <p key={index}>{facilitie}</p>)}
                        </div>
                        <div className='mt-10'>
                            <p><span className='text-xl font-bold text-gray-400'> Description: </span> {description}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HouseCardDetails;