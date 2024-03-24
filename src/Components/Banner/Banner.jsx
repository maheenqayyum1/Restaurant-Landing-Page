import React from 'react';
import Apple from "../../assets/apple.png";
import kiwi from "../../assets/kiwi.png";
import lemon from "../../assets/lemon.png";
import leaf from "../../assets/leaf.png";
import tomato from "../../assets/tomato.png";
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
  return (
    <>
    <div className='container py-14 relative'>
        <div className='relative z-20'>
        <h1 
        data-aos="fade-up" data-aos-delay="300"
        className='py-8 text-dark tracking-wider font-semibold text-2xl text-center'>
            Taste the Healthy Difference
        </h1>
        {/* Text Content Section */}
        <div className='scale-y-10'>
            <div 
                data-aos="fade-up"
                data-aos-delay="300" 
                className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                <div>
                    <p>
                        {" "}
                        We know that <span className='text-primary'>
                            time</span> is the 
                            greatest value in the modern world.
                            Our healthy meal plan delivery service
                            Good Food in Miami is the answer for 
                            those who want to eat healthy, saving
                            time for buying food and preparing delicious, 
                            healthy meals.
                    </p>
                </div>
                <div></div>
            </div>
            <div 
                data-aos="fade-up" 
                data-aos-delay="300" 
                className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
            <div></div>
                <div>
                    <p>
                        {" "}
                        We know that <span className='text-primary'>
                            time</span> is the 
                            greatest value in the modern world.
                            Our healthy meal plan delivery service
                            Good Food in Miami is the answer for 
                            those who want to eat healthy, saving
                            time for buying food and preparing delicious, 
                            healthy meals.
                    </p>
                </div>
            </div>
            </div>
             {/* Button Section */}
             <div
                data-aos="fade-up" 
                data-aos-delay="500"
                data-aos-offset="0" 
                className='flex justify-center mt-10 sm:mt-14'>
                    <PrimaryButton/>
                </div> 

            {/* Bg Fruit PNGS */}
            <div data-aos="fade-right" className='absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                <img src={leaf} alt="" className='max-w-[160px]' />
            </div>
            <div data-aos="fade-right" className='absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                <img src={tomato} alt="" className='max-w-[160px]' />
            </div>
            <div data-aos="fade-left" className='absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100'>
                <img src={lemon} alt="" className='max-w-[160px]' />
            </div>
            <div data-aos="fade-left" className='absolute hidden sm:block bottom-0 right-0'>
                <img src={Apple} alt="" className='max-w-[160px]' />
            </div>
            <div data-aos="fade" className='absolute top-2/4 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100'
            >
                <img src={kiwi} alt="" className='max-w-[180px]'/>
            </div>
        </div>
    </div>
    </>
  );
}

export default Banner;
