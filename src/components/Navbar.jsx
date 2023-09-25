import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { logo, menu, close, resume } from '../assets';
import { navLinks } from '../constants.js';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // Function to handle the download logic for the Resume button
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Your_Resume.pdf'; // Change the filename as desired
    link.click();
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Ayomide &nbsp; <span className='sm:block hidden'>Adejumo </span></p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            {/* Large Screen: Resume button with text and ml-2 class */}
            <button
              onClick={handleDownloadResume}
              className="bg-tertiary py-1 px-4 text-white text-[18px] font-medium cursor-pointer shadow-md shadow-primary rounded flex items-center hidden md:inline"
            >
              <span className="inline">Resume</span>
              <i className="ri-file-download-fill text-white ml-2 md:ml-2"></i> {/* Icon */}
            </button>

            {/* Medium Screen: Resume button with hidden text and no ml-2 class */}
            <button
              onClick={handleDownloadResume}
              className="bg-tertiary py-1 px-4 text-white text-[18px] font-medium cursor-pointer shadow-md shadow-primary rounded flex items-center md:hidden"
            >
              <span className="hidden">Resume</span>
              <i className="ri-file-download-fill text-white"></i> {/* Icon */}
            </button>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-0.5 green-pink-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-[10px]`}>
            <div className='bg-tertiary h-full w-full rounded-[10px] p-6'>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link) => (
                  <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
                <li>
                  {/* Mobile Screen: Resume button with text and ml-2 class */}
                  <button
                    onClick={handleDownloadResume}
                    className="bg-tertiary py-1 px-4 text-white text-[18px] font-medium cursor-pointer shadow-md shadow-primary rounded flex items-center sm:inline sm:ml-2"
                  >
                    <span className="inline">Resume</span>
                    <i className="ri-file-download-fill text-white ml-2 sm:ml-0"></i> {/* Icon */}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;


