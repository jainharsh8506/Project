import PropTypes from "prop-types";
export default function DoctorCard({ url, name, specialist, btnLink }) {
  return (
    <div className='block bg-white'>
      <img
        alt={name}
        src={url}
        className='w-full object-cover sm:h-80 rounded-tl-[5px] rounded-tr-[5px]'
      />

      <h3 className='text-center my-2 text-[#1f2b6c] text-lg font-bold font-Work-Sans uppercase tracking-[2.88px]'>
        {name}
      </h3>

      <div className=' text-wrap mx-auto text-center text-[#1f2b6c] text-[13px] font-normal font-Work-Sans leading-[18.07px]'>
        {" "}
        {specialist}
      </div>
      <button className='text-center text-white  bg-[#1f2b6c] rounded-bl-[5px] rounded-br-[5px] w-full py-3 mt-5 text-base font-normal font-Work-Sans leading-snug'>
        Contact Me
      </button>
    </div>
  );
}

DoctorCard.propTypes = {
  url: PropTypes.String,
  name: PropTypes.String,
  specialist: PropTypes.String,
  btnLink: PropTypes.String,
};
