import doctor from "../assets/doctor.png";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import DataContext from "../context/useContext";

import pulse from "../assets/heartbeat.gif";
import heroBg from "../assets/hero-bg.png";
export default function Hero() {
  const { appointmentSelectOptions } = useContext(DataContext);

  return (
    <>
    <div className='bg-gray-200 max-w-9xl mx-auto bg-cover bg-center' style={{ backgroundImage: `url(${heroBg})`,width: '100%' }}>
      <div
        
        className="w-full max-w-9xl flex-col lg:flex-row mx-auto flex items-center relative min-h-[516px]"
      >
        <div className='lg:absolute relative w-screen max-w-[500px] right-0 flex justify-center'>
          <img src={doctor} className='' alt='' />
        </div>
        <div
          // className='z-50'
          style={{
            position: "absolute",
            backgroundImage: `url(${pulse})`,
            backgroundSize: "contain",
            left: "48%",
            bottom: "15%",
            backgroundRepeat: "no-repeat",
            height: "150px",
            width: "250px",
            backgroundPosition: "center",
          }}
        ></div>
        <div className='relative lg:pl-36 lg:mt-0 mt-5 text-center lg:text-start'>
          <div className='max-w-[786.56px] min-h-[28.73px] text-[#159eec] text-base font-bold font-open-sans uppercase leading-relaxed'>
            Next-Gen Hospital Solutions: Drive Innovation,
            <br /> Deliver Quality Healthcare
          </div>
          <div className='text-[#1f2b6c] text-[50px] font-semibold font-poppins leading-[72px]'>
            Digital Hospital
            <br />
            Management at one
            <br />
            place
          </div>
          <div className='w-[176.98px] flex h-[50px] bg-[#159eec] rounded-[13px] justify-center mt-5 items-center text-white text-sm font-medium font-inter leading-normal text-center'>
            Sign Up{" "}
          </div>
        </div>
        <Appointement appointmentSelectOptions={appointmentSelectOptions} />
      </div>
    </div>
  </>
  );
}
const Appointement = ({ appointmentSelectOptions }) => {
  return (
    <div className="appointment-container bg-white px-8 pb-5 h-auto absolute right-0 left-0 -bottom-44 w-5/6 mx-auto rounded-[23px] shadow backdrop-blur-[28.74px]">
      <div className="text-center py-5 text-[#161e54] text-2xl font-bold font-poppins leading-loose">
        Book an Appointment
      </div>
      <div className="grid grid-cols-12 gap-5 relative w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full col-span-full md:col-span-8">
          {appointmentSelectOptions.map((select, index) => (
            <SelectTag key={index} label={select.label} options={select.options} />
          ))}
        </div>
        <div className="mx-auto w-full md:col-span-4 col-span-full md:items-center md:flex">
          <button className="mx-auto w-full md:w-[165.72px] h-[66.32px] bg-[#1f2b6c] rounded-[18.24px] text-white text-sm font-semibold font-inter leading-normal">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

Appointement.propTypes = {
  appointmentSelectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

const SelectTag = ({ label, options }) => {
  return (
    <div className="px-2 col-span-1 bg-[#f3f3f3] rounded-[13.03px] border border-[#dedede]">
      <select className="px-5 py-3 w-full bg-[#f3f3f3]">
        <option value="">{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

SelectTag.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};