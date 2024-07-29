import React, { useContext } from "react";
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
    <div style={{ 
      backgroundImage: `url('data:image/svg+xml;utf8,<svg width="1440" height="863" viewBox="0 0 1440 863" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1941.81 75.1663C1941.81 584.641 2122.1 880.833 1615.76 880.833C1109.42 880.833 -282.525 398.891 -282.525 -110.583C-282.525 -620.058 1157.5 -1097.96 1663.84 -1097.96C2170.18 -1097.96 1941.81 -434.309 1941.81 75.1663Z" fill="white"/><path d="M1941.81 75.1663C1941.81 584.641 2122.1 880.833 1615.76 880.833C1109.42 880.833 -282.525 398.891 -282.525 -110.583C-282.525 -620.058 1157.5 -1097.96 1663.84 -1097.96C2170.18 -1097.96 1941.81 -434.309 1941.81 75.1663Z" fill="white"/><path d="M1941.81 75.1663C1941.81 584.641 2122.1 880.833 1615.76 880.833C1109.42 880.833 -282.525 398.891 -282.525 -110.583C-282.525 -620.058 1157.5 -1097.96 1663.84 -1097.96C2170.18 -1097.96 1941.81 -434.309 1941.81 75.1663Z" fill="white"/><path d="M1941.81 75.1663C1941.81 584.641 2122.1 880.833 1615.76 880.833C1109.42 880.833 -282.525 398.891 -282.525 -110.583C-282.525 -620.058 1157.5 -1097.96 1663.84 -1097.96C2170.18 -1097.96 1941.81 -434.309 1941.81 75.1663Z" fill="white"/><path d="M1941.81 75.1663C1941.81 584.641 2122.1 880.833 1615.76 880.833C1109.42 880.833 -282.525 398.891 -282.525 -110.583C-282.525 -620.058 1157.5 -1097.96 1663.84 -1097.96C2170.18 -1097.96 1941.81 -434.309 1941.81 75.1663Z" fill="white"/><path d="M1941.81 75.1663C1941.81 584.641 2122.1 880.833 1615.76 880.833C1109.42 880.833 -282.525 398.891 -282.525 -110.583C-282.525 -620.058 1157.5 -1097.96 1663.84 -1097.96C2170.18 -1097.96 1941.81 -434.309 1941.81 75.1663Z" fill="white"/></svg>')`
    }}>
    <div className='pb-16 max-w-9xl w-[90%] mx-auto' >
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
