import React from 'react';
import BgPolygon from '../../assets/polygon.png'
import Vector from '../../assets/vector-wave.png'
import {FaUser} from "react-icons/fa";

const BgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative"
  };

const About = ({HandlePopup}) => {
  return (
    <>
    <div style={BgStyle} className='py-20'>
    <div className='container min-h-[500px] z-10 relative'>
      <h1
        data-aos="fade" 
        className='pt-20 text-white tracking-wider font-semibold text-4xl text-center'>
        About Us
    </h1>
    {/* Card Section */}
    <div 
      data-aos="fade" data-aos-delay="300"
      className='bg-white/80 p-10 my-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magni delectus nobis ratione laborum enim, sapiente fugit 
        ipsum dicta quidem, ut earum sit quia vitae debitis voluptatibus. 
        Distinctio aliquid eius nesciunt quaerat dignissimos sequi earum 
        atque maxime quam quas dolorem perspiciatis qui nobis ut, at laudantium 
        odit ipsam voluptate expedita ratione magnam, quo voluptas. Molestiae labore 
        cupiditate asperiores, enim ratione iusto omnis illum veniam atque earum! Reiciendis 
        repudiandae porro ad, voluptatibus commodi odio delectus, ducimus itaque doloribus 
        dolore accusamus quia, amet eum facilis excepturi molestiae iusto voluptatem est 
        incidunt assumenda culpa sunt quisquam? Debitis ut eos dolores consequuntur omnis voluptatum consectetur?
        <div className='pt-10 flex justify-center'>
            <button 
            onClick={HandlePopup}
            className='flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'>
                <FaUser />
                My Account
            </button>
        </div>
    </div>
</div>
    {/* Wave Vector */}
    <div className='absolute top-0 right-0 w-full'>
        <img src={Vector} alt="" 
        className='mx-auto' />
    </div>
</div>
    </>
  );
}

export default About;
