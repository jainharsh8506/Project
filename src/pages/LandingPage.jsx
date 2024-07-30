
import Aboutus from "../components/Aboutus";
import Hero from "../components/Hero";
import Legacy from "../components/Legacy";
import OurDoctors from "../components/OurDoctors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const LandingPage = () => {
  return (
    <>
    <div className="mb-40">
    <Hero />
    </div>
   
    <div className='bg-[#D4E7F4]'>
      <OurDoctors />
    <Aboutus />
      <Legacy />
    </div>
    </>
  )
}
