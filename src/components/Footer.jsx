import logoIcon from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className='bg-[#161e54] max-w-9xl mx-auto' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-9xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='xl:col-span-1 flex gap-5'>
            <img
              src={logoIcon}
              className='w-[59.62px] h-[46.40px] relative object-cover'
              alt=''
            />
            <p className=' text-white text-base font-light font-Open-Sans leading-relaxed'>
              Over past 10+ years of experience and skills in various
              technologies, we built great scalable products.
            </p>
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
                      className=' text-[#ff8e4b] text-sm font-normal font-Inter leading-normal'
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href='#Services'
                      className='text-base text-white hover:text-gray-900'
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href='#Doctors'
                      className='text-base text-white hover:text-gray-900'
                    >
                      {" "}
                      Doctors{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href='#About'
                      className='text-base text-white hover:text-gray-900'
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href='#Contact'
                      className='text-base text-white hover:text-gray-900'
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-auto'>
                <h3 className='w-[249.13px] h-8 text-[#ff8e4b] text-2xl font-semibold font-poppins leading-loose'>
                  Contact Information
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  <li className='flex items-ceter'>
                    <i className=''>
                      <svg
                        width='40px'
                        height='40px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z'
                          stroke='white'
                          strokeWidth='0.5'
                          strokeLinecap='round'
                        />
                      </svg>
                    </i>
                    <p className='text-white pl-2 text-sm font-semibold font-Inter leading-loose'>
                      +917096336561
                    </p>
                  </li>
                  <li className='flex items-ceter'>
                    <i className=''>
                      <svg
                        width='30px'
                        height='30px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M12 6V12'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M16.24 16.24L12 12'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </i>
                    <p className='text-white pl-2 text-sm font-semibold font-Inter leading-loose'>
                      08:00 AM to 21:00 PM
                    </p>
                  </li>
                  <li className='flex items-ceter'>
                    <i className=''>
                      <svg
                        version='1.0'
                        id='Layer_1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        width='30px'
                        height='30px'
                        viewBox='0 0 64 64'
                        enableBackground='new 0 0 64 64'
                        xmlSpace='preserve'
                      >
                        <g>
                          <path
                            fill='white'
                            d='M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64
		s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39
		h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z'
                          />
                          <path
                            fill='white'
                            d='M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32
		c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z'
                          />
                          <path
                            fill='white'
                            d='M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36
		c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z'
                          />
                        </g>
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
        </div>
        <div className='mt-12 border-t border-gray-200 pt-8'>
          <p className=' text-center text-white text-base font-light font-Open-Sans leading-relaxed'>
            Copyright © 2024 All Rights Reserved by HMS
          </p>
        </div>
      </div>
    </footer>
  );
}
