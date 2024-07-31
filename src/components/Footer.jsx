import logoIcon from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className='bg-[#161e54] xl:px-8' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 lg:gap-10 xl:gap-16  py-10 px-5 sm:px-6 lg:py-16 lg:px-28'>
        <div className=' flex flex-col gap-5'>
          <img
            src={logoIcon}
            className='w-[59.62px] h-[46.40px] relative object-cover'
            alt=''
          />
          <p className='text-white text-base font-light font-Open-Sans leading-relaxed'>
            Over past 10+ years of experience and skills in various
            technologies, we built great scalable products.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14875.306539030862!2d72.8792706!3d21.2387222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f003ebda427%3A0x9cc34f150db8ff90!2sAtlanta%20Mall!5e0!3m2!1sen!2sin!4v1722284272046!5m2!1sen!2sin"
            className='w-full h-56 mt-4 rounded-md'
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className='flex flex-col flex flex-col justify-center  md:justify-start items-center md:items-start'>
          <h3 className='w-[129.66px] h-8 text-[#ff8e4b] text-2xl font-semibold font-poppins leading-loose'>
            Useful Link
          </h3>
          <ul role='list' className='mt-4 space-y-4 '>
            <li>
              <a
                href='#home'
                className='text-[#ff8e4b] text-sm font-normal font-Inter leading-normal'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#Services'
                className='text-base text-white hover:text-gray-900'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#Doctors'
                className='text-base text-white hover:text-gray-900'
              >
                Doctors
              </a>
            </li>
            <li>
              <a
                href='#About'
                className='text-base text-white hover:text-gray-900'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#Contact'
                className='text-base text-white hover:text-gray-900'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className='flex flex-col flex flex-col flex flex-col justify-center  md:justify-start items-center md:items-start'>
          <h3 className='w-[249.13px] h-8 text-[#ff8e4b] text-2xl font-semibold font-poppins leading-loose '>
            Contact Information
          </h3>
          <ul role='list' className='mt-7 space-y-7 flex flex-col justify-center  md:justify-start items-center md:items-start'>
            <li className='flex flex-col md:flex-row justify-center  md:justify-start items-center '>
              <i>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9614 15.5276L19.0532 19.4651C18.9256 20.0217 18.4364 20.4112 17.8634 20.4112C8.0083 20.4104 -0.00732422 12.3948 -0.00732422 2.53929C-0.00732422 1.96664 0.38209 1.47679 0.93877 1.34984L4.87627 0.441636C5.44971 0.308746 6.03564 0.606402 6.27393 1.14945L8.09111 5.38773C8.30354 5.88695 8.16025 6.46859 7.74033 6.81156L5.63721 8.50023C6.96455 11.2041 9.16299 13.4026 11.8677 14.7307L13.5896 12.6291C13.9289 12.208 14.5149 12.0623 15.0142 12.2786L19.2524 14.0953C19.7622 14.3635 20.0942 14.9573 19.9614 15.5276Z" fill="white" />
                </svg>
              </i>
              <p className='text-white pl-2 text-sm font-semibold font-Inter leading-loose'>
                +917096336561
              </p>
            </li>
            <li className='flex flex-col md:flex-row justify-center  md:justify-start items-center '>
              <i>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.99268 20.4102C4.46924 20.4102 -0.00732422 15.9336 -0.00732422 10.4102C-0.00732422 4.88672 4.46924 0.410156 9.99268 0.410156C15.5161 0.410156 19.9927 4.88672 19.9927 10.4102C19.9927 15.9336 15.5161 20.4102 9.99268 20.4102ZM9.05518 10.4102C9.05518 10.7227 9.21143 11.0156 9.47314 11.1562L13.2231 13.6562C13.6528 13.9766 14.2349 13.8594 14.4888 13.4297C14.8091 13 14.6919 12.418 14.2622 12.1289L10.9302 9.91016V5.09766C10.9302 4.57812 10.5122 4.16016 9.95752 4.16016C9.47314 4.16016 9.02002 4.57812 9.02002 5.09766L9.05518 10.4102Z" fill="white" />
                </svg>
              </i>
              <p className='text-white pl-2 text-sm font-semibold font-Inter leading-loose'>
                08:00 AM to 21:00 PM
              </p>
            </li>
            <li className='flex flex-col md:flex-row justify-center  md:justify-start items-center'>
              <i>
                <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.56689 19.9102C4.52783 17.4023 -0.00732422 11.3242 -0.00732422 7.91016C-0.00732422 3.76797 3.35049 0.410156 7.49268 0.410156C11.6333 0.410156 14.9927 3.76797 14.9927 7.91016C14.9927 11.3242 10.4224 17.4023 8.41846 19.9102C7.93799 20.5078 7.04736 20.5078 6.56689 19.9102ZM7.49268 10.4102C8.87158 10.4102 9.99268 9.28906 9.99268 7.91016C9.99268 6.53125 8.87158 5.41016 7.49268 5.41016C6.11377 5.41016 4.99268 6.53125 4.99268 7.91016C4.99268 9.28906 6.11377 10.4102 7.49268 10.4102Z" fill="white" />
                </svg>
              </i>
              <p className='text-white pl-2 text-sm font-semibold font-Inter leading-loose text-center'>
                C/303, Atlanta Shopping Mall Sudama Chowk, Mota Varachha,
                Surat, Gujarat 394101
              </p>
            </li>
          </ul>
        </div>
        </div>
        {/* <div className='md:grid md:grid-cols-3 xl:gap-10'>
          <div className=' flex flex-col gap-5'>
            <img
              src={logoIcon}
              className='w-[59.62px] h-[46.40px] relative object-cover'
              alt=''
            />
            <p className='text-white text-base font-light font-Open-Sans leading-relaxed'>
              Over past 10+ years of experience and skills in various
              technologies, we built great scalable products.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14875.306539030862!2d72.8792706!3d21.2387222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f003ebda427%3A0x9cc34f150db8ff90!2sAtlanta%20Mall!5e0!3m2!1sen!2sin!4v1722284272046!5m2!1sen!2sin"
              className='w-full h-56 mt-4 rounded-md'
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> 
          <div className='mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2 w-full'>
            <div className='grid sm:grid-cols-2 col-span-full w-full md:gap-8 justify-center sm:justify-between'>
              <div className='w-fit'>
                <h3 className='w-[129.66px] h-8 text-[#ff8e4b] text-2xl font-semibold font-poppins leading-loose'>
                  Useful Link
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  <li>
                    <a
                      href='#home'
                      className='text-[#ff8e4b] text-sm font-normal font-Inter leading-normal'
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='#Services'
                      className='text-base text-white hover:text-gray-900'
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href='#Doctors'
                      className='text-base text-white hover:text-gray-900'
                    >
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a
                      href='#About'
                      className='text-base text-white hover:text-gray-900'
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href='#Contact'
                      className='text-base text-white hover:text-gray-900'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-auto'>
                <h3 className='w-[249.13px] h-8 text-[#ff8e4b] text-2xl font-semibold font-poppins leading-loose'>
                  Contact Information
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  <li className='flex items-center'>
                    <i>
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9614 15.5276L19.0532 19.4651C18.9256 20.0217 18.4364 20.4112 17.8634 20.4112C8.0083 20.4104 -0.00732422 12.3948 -0.00732422 2.53929C-0.00732422 1.96664 0.38209 1.47679 0.93877 1.34984L4.87627 0.441636C5.44971 0.308746 6.03564 0.606402 6.27393 1.14945L8.09111 5.38773C8.30354 5.88695 8.16025 6.46859 7.74033 6.81156L5.63721 8.50023C6.96455 11.2041 9.16299 13.4026 11.8677 14.7307L13.5896 12.6291C13.9289 12.208 14.5149 12.0623 15.0142 12.2786L19.2524 14.0953C19.7622 14.3635 20.0942 14.9573 19.9614 15.5276Z" fill="white"/>
                      </svg>
                    </i>
                    <p className='text-white pl-2 text-sm font-semibold font-Inter leading-loose'>
                      +917096336561
                    </p>
                  </li>
                  <li className='flex items-center'>
                    <i>
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99268 20.4102C4.46924 20.4102 -0.00732422 15.9336 -0.00732422 10.4102C-0.00732422 4.88672 4.46924 0.410156 9.99268 0.410156C15.5161 0.410156 19.9927 4.88672 19.9927 10.4102C19.9927 15.9336 15.5161 20.4102 9.99268 20.4102ZM9.05518 10.4102C9.05518 10.7227 9.21143 11.0156 9.47314 11.1562L13.2231 13.6562C13.6528 13.9766 14.2349 13.8594 14.4888 13.4297C14.8091 13 14.6919 12.418 14.2622 12.1289L10.9302 9.91016V5.09766C10.9302 4.57812 10.5122 4.16016 9.95752 4.16016C9.47314 4.16016 9.02002 4.57812 9.02002 5.09766L9.05518 10.4102Z" fill="white"/>
                      </svg>
                    </i>
                    <p className='text-white pl-2 text-sm font-semibold font-Inter leading-loose'>
                      08:00 AM to 21:00 PM
                    </p>
                  </li>
                  <li className='flex items-center'>
                    <i>
                      <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.56689 19.9102C4.52783 17.4023 -0.00732422 11.3242 -0.00732422 7.91016C-0.00732422 3.76797 3.35049 0.410156 7.49268 0.410156C11.6333 0.410156 14.9927 3.76797 14.9927 7.91016C14.9927 11.3242 10.4224 17.4023 8.41846 19.9102C7.93799 20.5078 7.04736 20.5078 6.56689 19.9102ZM7.49268 10.4102C8.87158 10.4102 9.99268 9.28906 9.99268 7.91016C9.99268 6.53125 8.87158 5.41016 7.49268 5.41016C6.11377 5.41016 4.99268 6.53125 4.99268 7.91016C4.99268 9.28906 6.11377 10.4102 7.49268 10.4102Z" fill="white"/>
                      </svg>
                    </i>
                    <p className='text-white pl-2 text-sm font-semibold font-Inter leading-loose'>
                      C/303, Atlanta Shopping Mall Sudama Chowk, Mota Varachha,
                      Surat, Gujarat 394101
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div className='mt-12 border-t border-gray-200 py-6 px-4'>
          <p className='text-center text-white text-base font-light font-Open-Sans leading-relaxed'>
            Copyright © 2024 All Rights Reserved by HMS
          </p>
        </div>
      
    </footer>
  );
}
