import React from 'react';

//import images 
import WomanIMG from '../img/long.png'

//import link 
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='lg:h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-around h-full'>

        {/* Text */}
        <div className='flex flex-col justify-center text-center lg:text-left'>

          {/* Pre-title */}
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-orange-500 mr-3'></div>
            Fresh Fashion
          </div>

          {/* Title */}
          <h1 className='text-4xl lg:text-5xl xl:text-6xl uppercase leading-[1.1] font-light mb-4
          text-left'>
            Chic Fall Discounts <br />
            <span className='font-semibold'>WOMENS</span>
          </h1>

          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-orange-500'>
            Shop Now
          </Link>
        </div>

        {/* Image (Hidden on smaller screens) */}
        <div className='hidden lg:block'>
          <img className='w-full' src={WomanIMG} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;


