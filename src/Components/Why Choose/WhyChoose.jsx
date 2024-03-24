import React from 'react';
import {FaBus} from "react-icons/fa"

const WhyChoose = () => {
  return (
  <>
    <div py-14 md:py-28 bg-gray-50>
      <div className="container">
        {/* Heading Section */}
        <h1 
            data-aos="fade"
            className='pb-16 text-dark tracking-wider font-semibold text-2xl text-center'>
            Why Choose Us
        </h1>

        {/* Card Section */}
        <div data-aos="fade" data-aos-delay="300">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
                {/* 1st Card */}
                <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
                    <p className='text-dark/70 font-semibold'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam?
                    </p>
                    <p className='text-5xl rotate-90 text-primary text-center translate-x-4'>...</p>
                    <FaBus className='text-5xl text-primary'/>
                </div>
                {/* 2nd Card */}
                <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
                    <FaBus className='text-5xl text-secondary'/>
                    <p className='text-5xl rotate-90 text-secondary text-center translate-x-4'>...</p>
                    <p className='text-dark/70 font-semibold'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam?
                    </p>                  
                </div>
                {/* 3rd Card */}
                <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
                    <p className='text-dark/70 font-semibold'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam?
                    </p>
                    <p className='text-5xl rotate-90 text-primary text-center translate-x-4'>...</p>
                    <FaBus className='text-5xl text-primary'/>
                </div>
                {/* 4th Card */}
                <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
                    <FaBus className='text-5xl text-secondary'/>
                    <p className='text-5xl rotate-90 text-secondary text-center translate-x-4'>...</p>
                    <p className='text-dark/70 font-semibold'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam?
                    </p>                  
                </div>
            </div>
        </div>
      </div>
    </div>
  </>
    );
}

export default WhyChoose;
