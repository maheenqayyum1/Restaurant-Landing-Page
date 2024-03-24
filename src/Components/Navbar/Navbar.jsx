import React from 'react';
import {FaCaretDown, FaUser} from "react-icons/fa"

const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "About",
        link: "/#"
    },
    {
        id: 3,
        name: "Contact",
        link: "/#"
    },
];
const DropdownLinks = [
    {
        id: 1,
        name: "Vegetables",
        link: "/#"
    },
    {
        id: 2,
        name: "Fruits",
        link: "/#"
    },
    {
        id: 3,
        name: "Grains",
        link: "/#"
    },
];

const Navbar = ({HandlePopup}) => {
  return (
    <div data-aos="fade" className='bg-white shadow-md'>
      <div className='container flex justify-between py-4 sm:py-3'>
        {/* logo */}
        <div className='font-bold text-3xl'>Logo</div>
        {/* navbar-links */}
        <div>
            <ul className='flex items-center gap-10'>
                {
                    NavLinks.map(({id, name, link}) => (
                        <li key={id}> 
                            <a href={link} className='font-semibold hover:text-primary hidden sm:inline-block text-xl'>{name}</a>
                        </li>
                    ))
                }
                {/* simple dropdown */}
                <li className='hidden md:block cursor-pointer group '>
                    <a href="/#" className='font-semibold hover:text-primary inline-block text-xl'>
                       <div className="flex items-center gap-[2px] py-2">
                       Categories
                        <span>
                            <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                        </span>
                       </div>
                    </a>
                    {/* dropdown section */}
                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] p-2 bg-white text-black shadow-md'>
                        <ul>
                            {DropdownLinks.map(({id, name, link}) => (
                                <li key={id}>
                                    <a href={link}
                                    className='inline-block w-full hover:bg-primary/20 text-xl rounded-md'
                                    >
                                    {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
                {/* Login Button Section */}
                <li>
                <button 
                className='flex justify-center items-center gap-2 bg-secondary text-sm h-[40px] text-white px-2 md:px-5 py-2 hover:scale-105 duration-300 '
                onClick={HandlePopup}>
                    <FaUser/>
                    My Account
                </button>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
