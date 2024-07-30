import { useContext } from "react";
import DataContext from "../context/useContext";
import Aboutus1 from "../assets/Aboutus1.gif";
import Aboutus2 from "../assets/Aboutus2.png";

export default function Aboutus() {
  const { aboutCardData } = useContext(DataContext);
  return (
    <div className="relative overflow-hidden">
      {/* <div className="clipped-element2-background"></div> */}
      <div className='max-w-9xl w-[90%] mx-auto'>
        <div className='py-10 md:py-16'>
          <div className='text-center text-[#159eec] text-lg font-bold font-Work-Sans uppercase tracking-[2.88px]'>
            Get in touch
          </div>
          <div className='text-center text-[#1f2b6c] text-[50px] font-normal font-Yeseva-One '>
            About Us
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex flex-col  gap-5  '>
            {aboutCardData?.map((val, i) => (
              <Card key={i} index={i} title={val?.title} number={val?.number} />
            ))}
          </div>
          <div className='content relative  pt-8 lg:pt-0 lg:-mt-5   lg:ml-16  text-[#2574ac] text-[21px] font-medium font-Work-Sans 
          leading-[2rem] lg:leading-[63px]'>
            Our hospital is equipped with state-of-the-art technology and facilities to provide a wide range of medical services, from emergency care and surgery to rehabilitation and preventive health programs. We are committed to continuously improving and expanding our services to meet the needs of our community.
            <div className="relative w-[410px] h-[457px]">
              <div className="absolute w-[300px] h-[300px] right-[10px] top-[105px] bg-[#222f66] rounded-tl-[150px] rounded-tr-[150px] rounded-br-[150px] z-10" />
              <div className="absolute right-0 bottom-0 h-56 w-full flex items-end justify-end z-20 sm:mx-8 sm-left-16">
                <img
                  src={Aboutus2}
                  alt=''
                  className='mix-blend-multiply aspect-auto rounded-b-sm'
                />
              </div>
            </div>
          </div>
          <div className='z-20 flex items-center w-full justify-center relative'>
            <div className='ellipse-clip overflow-hidden'>
              <img
                src={Aboutus1}
                alt=''
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, number, index }) => (
  <div
    style={{
      background: index === 1 ? "#1f2b6c" : "#e2f3ff",
      color: index !== 1 ? "#1f2b6c" : "#e2f3ff",
    }}
    className='w-full md:w-fit p-5 rounded-[20px] backdrop-blur-[28.74px]'
  >
    <div className=' md:w-[127.88px] text-xl font-bold font-Work-Sans uppercase leading-normal'>
      {title}
    </div>
    <div className='text-[40px] font-semibold font-poppins'>{number}</div>
  </div>
);
