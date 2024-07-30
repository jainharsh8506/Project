import React, { useContext } from "react";
import starIcon from "../assets/star.svg";
import blueStarIcon from "../assets/blue-star.svg";
import DataContext from "../context/useContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCustom.css"; // Import your custom CSS

export default function Legacy() {
  const { legacyCard } = useContext(DataContext);
  var settings = {
    dots: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 2,
    slidesPerRow: 1,
    rows: 2,
    speed: 500,
    initialSlide: 0,
    arrows: false,
    className: "center",
    // centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          slidesPerRow: 1,
          infinite: true,
          dots: true,
          rows: 2
        },
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 2,
          slidesToShow:1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          infinite: true,
          dots: true,
          rows: 1
        },
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: 0,
          slidesToShow:1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          infinite: true,
          dots: true,
          rows: 1
        },
      },
    ],
  };
  return (
    <div className='max-w-9xl mx-auto'>
      <div className=' mt-16 py-8'>
      <div className='max-w-9xl w-[90%] mx-auto relative'>
        <div className=' text-center text-[#1f2b6c] text-[50px] font-normal font-Yeseva-One'>
          Our Legacy
        </div>
        <div className='max-w-[863.89px] mx-auto text-center text-[#159eec] text-lg font-bold font-Work-Sans uppercase tracking-[2.88px]'>
          consistently delivering quality healthcare services
          <br />
          with a smile to uplift and inspire our patients.
        </div>
        
              <div className="slider-container my-8 max-w-9xl lg:w-[70%] md:w-[80%] mx-auto sm:w-[95%]">
        <Slider {...settings}>
          {legacyCard?.map((val, i) => (
            <div key={i}>
              <Card
                key={i}
                id={val?.id}
                name={val?.name}
                url={val?.url}
                review={val?.review}
                rating={val?.rating}
              />
            </div>
          ))}
        </Slider>
      </div>
      </div>
      </div>
    </div>
  );
}

const Card = ({ name, url, review, rating, id }) => {
  return (
    <div className='bg-[#fcfefe] rounded-[5px] flex flex-col lg:flex-row mx-2 my-4' key={id}>
      <img
        src={url}
        className='w-full lg:max-w-[145.75px] max-h-[187.05px] object-cover'
        alt={name}
      />
      <div className='px-5 py-3 space-y-3'>
        <div className=' text-[#159eec] text-base font-bold font-Work-Sans'>
          {name}
        </div>
        <div className='text-[#202124] text-sm font-normal font-Work-Sans leading-[13.86px]'>
          {review}
        </div>
        <div className='flex gap-3'>
          {[1, 2, 3, 4, 5].map((val, i) => {
            return (
              <img
                key={i}
                src={i < rating ? blueStarIcon : starIcon}
                className='size-5  lg:size-7'
                alt=''
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};