import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slideImage1 from "../assets/1.jpg"
import slideImage2 from "../assets/2.jpg"
import slideImage3 from "../assets/3.jpg"


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                // pagination={true}
                // mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideImage1})` }} className="min-h-[70vh] w-full bg-center bg-no-repeat  bg-cover bg-slate-900	rounded-md flex justify-center items-center">
                    <div className='text-center'>
                        <h2 className='text-6xl font-bold text-white tracking-widest'>DETROIT COMMERCIAL <br />
                            REAL ESTATE</h2>
                    </div>

                </div></SwiperSlide>
                <SwiperSlide><div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideImage2})` }} className="min-h-[70vh] w-full bg-center bg-no-repeat  bg-cover bg-slate-900	rounded-md flex justify-center items-center">
                    <div className='text-center'>
                        <h2 className='text-6xl font-bold text-white tracking-widest'>DETROIT COMMERCIAL <br />
                            REAL ESTATE</h2>
                    </div>

                </div></SwiperSlide>
                <SwiperSlide><div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slideImage1})` }} className="min-h-[70vh] w-full bg-center bg-no-repeat  bg-cover bg-slate-900	rounded-md flex justify-center items-center">
                    <div className='text-center'>
                        <h2 className='text-6xl font-bold text-white tracking-widest'>DETROIT COMMERCIAL <br />
                            REAL ESTATE</h2>
                    </div>

                </div></SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default Banner;