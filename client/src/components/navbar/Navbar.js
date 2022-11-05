import React, { useState } from 'react';
import './navbar.scss';
import Imglogo from '../../assets/logo.png';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';


function Navbar() {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={Imglogo} alt="logo" />
      </div>
      <ul className='navbar-links'>
        <li className='app__flex p-text'><a href="#home">Home</a></li>
        <li className='app__flex p-text'><a href="#about">About</a></li>
        <li className='app__flex p-text'><a href="#work">Work</a></li>
        <li className='app__flex p-text'><a href="#skills">Skills</a></li>
        <li className='app__flex p-text'><a href="#contact">Contact</a></li>
      </ul>

      {/* for mobile display */}
      <div className="navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }} //means 300px
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  {/* so that after clicking link it closes */}
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
