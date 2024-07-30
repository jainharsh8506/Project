import { useContext } from "react";
import DoctorCard from "./DoctorCard";
import DataContext from "../context/useContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCustom.css"; // Import your custom CSS


export default function OurDoctors() {
  const { doctorList } = useContext(DataContext);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative ">
    <div className="clipped-element"></div>

    <div className='pb-16 relative w-[95%] mx-auto' >
          <div className="text-center pt-5 mt-56 text-[#159eec]  text-lg font-bold font-['Work Sans'] uppercase tracking-[2.88px]">
            Trusted Care
          </div>
          <div className=' w-auto pb-8 text-center text-[#1f2b6c] text-[50px] font-normal font-Yeseva-One'>
            Our Doctors
          </div>
      <div className="slider-container max-w-9xl w-[92%] mx-auto">
        <Slider {...settings}>
          {doctorList?.map((val, i) => (
            <div key={i}>
              <DoctorCard
                name={val?.name}
                url={val?.url}
                specialist={val?.specialist}
                btnLink={val?.btnLink}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
}
